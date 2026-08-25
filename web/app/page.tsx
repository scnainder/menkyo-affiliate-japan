export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">免許が欲しい？</h2>
          <p className="hero-subtitle">
            運転免許は取れる。<br />
            でも教習所選びは超大事。
          </p>
          <a href="/list" className="cta-button">
            近くの教習所を探す
          </a>
        </div>
      </section>

      <section className="why-menkyo">
        <div className="container">
          <h3>Menkyo.meは何？</h3>
          <p>
            日本全国の自動車学校（教習所）を集めた。<br />
            <strong>安い。近い。評判がいい。</strong><br />
            この3つからお前に合った学校を選べる。
          </p>
        </div>
      </section>

      <section className="problems">
        <div className="container">
          <h3>こんな悩みない？</h3>

          <div className="problem-grid">
            <div className="problem-card">
              <h4>🤔 どの教習所？</h4>
              <p>
                教習所って、いっぱいある。<br />
                どれ選べばいいか分かんない。
              </p>
            </div>

            <div className="problem-card">
              <h4>💰 料金が高い</h4>
              <p>
                教習所によって値段が全然違う。<br />
                同じ免許なのに。
              </p>
            </div>

            <div className="problem-card">
              <h4>😡 ブラック教習所</h4>
              <p>
                教官の質がヤバい教習所もある。<br />
                失敗したくない。
              </p>
            </div>

            <div className="problem-card">
              <h4>📍 遠い</h4>
              <p>
                移動が遠いと通いたくなくなる。<br />
                近い方が楽。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="container">
          <h3>Menkyo.meが解決する</h3>

          <div className="solution-grid">
            <div className="solution-item">
              <span className="icon">📊</span>
              <h4>料金を比較できる</h4>
              <p>
                全国の教習所の料金が一覧。<br />
                安いところが一目瞭然。
              </p>
            </div>

            <div className="solution-item">
              <span className="icon">⭐</span>
              <h4>評判が見れる</h4>
              <p>
                実際に行った人の口コミ。<br />
                教官の質も分かる。
              </p>
            </div>

            <div className="solution-item">
              <span className="icon">📍</span>
              <h4>場所から探せる</h4>
              <p>
                都道府県・市区町村から選ぶ。<br />
                一番近い教習所が見つかる。
              </p>
            </div>

            <div className="solution-item">
              <span className="icon">⚡</span>
              <h4>5分で決まる</h4>
              <p>
                余計な説明なし。<br />
                シンプルにデータだけ。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gentsuki-explanation">
        <div className="container">
          <h3>「元付き（ゲンツキ）」って何？</h3>

          <div className="explanation-box">
            <p>
              「元付き」 = <strong>一番最初の窓口</strong><br />
              <br />
              教習所を探すやつって、いっぱいいるでしょ？<br />
              Google検索したり、友達に聞いたり。<br />
              <br />
              Menkyo.meは、<strong>その一番最初の窓口になる</strong>ってわけ。<br />
              <br />
              だから：
            </p>

            <ul className="gentsuki-list">
              <li>お前が Menkyo.me 経由で教習所に申し込む</li>
              <li>教習所は Menkyo.me に手数料を払う</li>
              <li>Menkyo.me が成長する</li>
            </ul>

            <p className="gentsuki-note">
              つまり、<strong>お前が教習所を選ぶだけで、Menkyo.me が儲かる仕組み。</strong><br />
              お前は何も払わない。ただ選ぶだけ。
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h3>今すぐ始めよう</h3>
          <p>お前の免許取得、Menkyo.meが応援する</p>
          <a href="/list" className="cta-button-large">
            教習所を探す →
          </a>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h3>よくある質問</h3>

          <div className="faq-item">
            <h4>Q: 本当に料金は同じ？</h4>
            <p>
              A: うん。Menkyo.me 経由でも、直接申し込んでも、<br />
              教習所の料金は変わらない。<br />
              Menkyo.me の手数料は教習所が払ってる。
            </p>
          </div>

          <div className="faq-item">
            <h4>Q: 個人情報は大丈夫？</h4>
            <p>
              A: 大丈夫。<br />
              お前の情報は暗号化されて、安全に保管される。<br />
              勝手に売ったりしない。
            </p>
          </div>

          <div className="faq-item">
            <h4>Q: 何で無料？</h4>
            <p>
              A: 教習所が払ってるから。<br />
              お前は何も払わなくていい。<br />
              ただ選ぶだけ。
            </p>
          </div>

          <div className="faq-item">
            <h4>Q: 合格できなかったら？</h4>
            <p>
              A: Menkyo.me のせいじゃない。<br />
              教習所でちゃんと頑張ってください。<br />
              応援してます。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
