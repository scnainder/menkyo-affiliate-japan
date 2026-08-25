'use client'

import { useState, useMemo } from 'react'
import { schools, getAllPrefectures } from '@/lib/schools'

export default function ListPage() {
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('全国')
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'reviews'>('rating')
  const [priceRange, setPriceRange] = useState<[number, number]>([200000, 350000])

  const prefectures = ['全国', ...getAllPrefectures()]

  const filteredSchools = useMemo(() => {
    let result = schools

    // Prefecture filter
    if (selectedPrefecture !== '全国') {
      result = result.filter(school => school.prefecture === selectedPrefecture)
    }

    // Price range filter
    result = result.filter(
      school => school.price >= priceRange[0] && school.price <= priceRange[1]
    )

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        case 'reviews':
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

    return result
  }, [selectedPrefecture, sortBy, priceRange])

  return (
    <div className="list-page">
      <section className="list-hero">
        <div className="container">
          <h2>教習所を探す</h2>
          <p>全国 {schools.length} 校から選べる</p>
        </div>
      </section>

      <section className="filters">
        <div className="container">
          <div className="filter-group">
            <div className="filter-item">
              <label>都道府県から探す</label>
              <select
                value={selectedPrefecture}
                onChange={(e) => setSelectedPrefecture(e.target.value)}
                className="filter-select"
              >
                {prefectures.map(pref => (
                  <option key={pref} value={pref}>
                    {pref}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label>並び順</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="filter-select"
              >
                <option value="rating">評判がいい順</option>
                <option value="price">安い順</option>
                <option value="reviews">口コミ多い順</option>
              </select>
            </div>

            <div className="filter-item">
              <label>料金: ¥{priceRange[0].toLocaleString()} ～ ¥{priceRange[1].toLocaleString()}</label>
              <input
                type="range"
                min="200000"
                max="350000"
                step="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="filter-range"
              />
            </div>
          </div>

          <div className="filter-results">
            見つかった教習所: <strong>{filteredSchools.length}</strong> 校
          </div>
        </div>
      </section>

      <section className="schools-list">
        <div className="container">
          {filteredSchools.length > 0 ? (
            <div className="schools-grid">
              {filteredSchools.map(school => (
                <div key={school.id} className="school-card">
                  <div className="school-header">
                    <h3>{school.name}</h3>
                    <div className="school-rating">
                      <span className="stars">⭐ {school.rating}</span>
                      <span className="reviews">({school.reviews})</span>
                    </div>
                  </div>

                  <div className="school-info">
                    <p className="location">📍 {school.prefecture} {school.city}</p>
                    <p className="price">💰 ¥{school.price.toLocaleString()}</p>
                  </div>

                  <div className="school-features">
                    {school.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="school-actions">
                    <a href={school.website} className="btn-details">
                      詳しく見る →
                    </a>
                    <a href={`tel:${school.contact}`} className="btn-call">
                      電話する
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>教習所が見つかりませんでした。</p>
              <p>フィルターを変更して試してください。</p>
            </div>
          )}
        </div>
      </section>

      <section className="how-to-apply">
        <div className="container">
          <h3>申し込み方法</h3>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>気に入った教習所を選ぶ</h4>
              <p>ここから選んでね</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h4>「詳しく見る」をクリック</h4>
              <p>教習所の詳細ページに行く</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h4>申し込みフォームを記入</h4>
              <p>5分で終わる</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h4>教習所から連絡が来る</h4>
              <p>あとは指示に従うだけ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h3>Menkyo.me で申し込むと？</h3>

          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="icon">✅</span>
              <h4>料金は変わらない</h4>
              <p>直接申し込んでも、ここからでも同じ</p>
            </div>

            <div className="benefit-item">
              <span className="icon">🛡️</span>
              <h4>安全</h4>
              <p>個人情報は暗号化して保護</p>
            </div>

            <div className="benefit-item">
              <span className="icon">⚡</span>
              <h4>簡単</h4>
              <p>フォーム記入するだけ</p>
            </div>

            <div className="benefit-item">
              <span className="icon">💬</span>
              <h4>サポート</h4>
              <p>困ったことがあったら聞ける</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
