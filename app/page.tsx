import Image from "next/image";
import { BatteryCharging, RadioTower, ScanSearch } from "lucide-react";
import { HeroGlassesLoader } from "./HeroGlassesLoader";
import { ReservationForm } from "./ReservationForm";

const painPoints = [
  {
    number: "01",
    title: "雙手總被器材綁住",
    text: "活動現場一手拿手機、一手顧流程，精彩瞬間總在切換工作時溜走。",
  },
  {
    number: "02",
    title: "即時素材永遠慢一步",
    text: "拍完、傳檔、整理再發布，當話題熱度正高，團隊還在等待第一批畫面。",
  },
  {
    number: "03",
    title: "長時間紀錄太耗神",
    text: "手持拍攝不只疲累，也讓行銷人員無法自然互動、專心觀察現場。",
  },
];

const features = [
  {
    eyebrow: "4K READY",
    title: "高畫質",
    text: "清晰捕捉現場細節，第一視角素材可直接投入社群、活動紀錄與內容剪輯。",
    Icon: ScanSearch,
    variant: "quality",
  },
  {
    eyebrow: "LIVE FAST",
    title: "低延遲",
    text: "畫面快速同步，讓遠端團隊即時掌握現場，縮短從發生到發布的距離。",
    Icon: RadioTower,
    variant: "latency",
  },
  {
    eyebrow: "ALL DAY",
    title: "長時間工作",
    text: "為長時間任務設計，從展會巡場到品牌活動，都能持續留下關鍵畫面。",
    Icon: BatteryCharging,
    variant: "battery",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="heroImage"
          src="/ai-glasses-hero.png"
          alt="配戴 AI 眼鏡時看見的第一人稱捷運場景"
          fill
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="heroShade" />
        <nav className="nav" aria-label="主要導覽">
          <a className="brand" href="#top" aria-label="AI 眼鏡首頁">
            <span className="brandDot" />
            AI EYE
          </a>
          <a className="navCta" href="#reserve">免費體驗</a>
        </nav>

        <div className="heroContent" id="top">
          <div className="heroCopy">
            <p className="kicker">WEAR IT. LIVE IT. CAPTURE IT.</p>
            <h1 id="hero-title">
              你的視線，
              <span>就是鏡頭。</span>
            </h1>
            <p className="heroLead">
              AI 眼鏡讓行銷現場以第一人稱即時錄影。解放雙手，也保留人與人自然交流的溫度。
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#reserve">預約線下免費體驗 <span>↗</span></a>
              <a className="textLink" href="#features">探索三大賣點 <span>↓</span></a>
            </div>
          </div>
          <HeroGlassesLoader />
        </div>

        <div className="heroMeta" aria-hidden="true">
          <span>POV / 001</span>
          <span className="signal"><i /><i /><i /> LIVE</span>
        </div>
      </section>

      <section className="pain section" aria-labelledby="pain-title">
        <div className="sectionIntro">
          <p className="eyebrow">THE PROBLEM</p>
          <h2 id="pain-title">內容要即時，<br />雙手更要自由。</h2>
          <p>當行銷人員身在第一現場，拍攝工具不該成為工作與觀察的阻礙。</p>
        </div>
        <div className="painGrid">
          {painPoints.map((item) => (
            <article className="painCard" key={item.number}>
              <span className="cardNumber">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="features section" id="features" aria-labelledby="features-title">
        <div className="sectionIntro lightIntro">
          <p className="eyebrow">BUILT FOR THE FIELD</p>
          <h2 id="features-title">戴上，就能開始。</h2>
          <p>三個核心能力，讓捕捉、協作與長時間紀錄成為一個自然動作。</p>
        </div>
        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <div className={`featureIcon ${feature.variant}`} role="img" aria-label={`${feature.title}圖示`}>
                <span className="iconGrid" aria-hidden="true" />
                <feature.Icon aria-hidden="true" strokeWidth={1.55} />
                <span className="iconPulse" aria-hidden="true" />
              </div>
              <p className="featureEyebrow">{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial section" aria-labelledby="testimonial-title">
        <div className="quoteMark" aria-hidden="true">“</div>
        <blockquote>
          <p id="testimonial-title">
            以前做活動側拍，總要在互動與拍攝之間取捨。戴上 AI 眼鏡後，我能專心和來賓交流，第一視角素材也同步留下，回公司就能快速整理成社群內容。
          </p>
          <footer>
            <span className="avatar">M</span>
            <span><strong>品牌行銷企劃</strong><small>線下體驗者回饋</small></span>
          </footer>
        </blockquote>
        <div className="quoteMetric">
          <strong>01</strong>
          <span>個視角<br />完整帶走現場</span>
        </div>
      </section>

      <section className="cta section" id="reserve" aria-labelledby="cta-title">
        <div className="ctaCopy">
          <p className="eyebrow darkEyebrow">FREE OFFLINE EXPERIENCE</p>
          <h2 id="cta-title">親自戴上，<br />看見第一視角的差別。</h2>
          <p>留下基本資料，我們將與您聯繫，安排最合適的線下定點免費體驗時段。</p>
          <div className="ctaTags" aria-label="體驗特色">
            <span>免費體驗</span><span>專人導覽</span><span>現場實拍</span>
          </div>
        </div>
        <ReservationForm />
      </section>

      <footer className="footer">
        <a className="brand footerBrand" href="#top"><span className="brandDot" />AI EYE</a>
        <p>第一人稱，即時記錄品牌現場。</p>
        <a href="#top">回到頂端 ↑</a>
      </footer>
    </main>
  );
}
