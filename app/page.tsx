import Image from "next/image";
import { ArrowUpRight, Github, Send } from "lucide-react";
import { PortfolioMotion } from "@/components/PortfolioMotion";

const tasks = [
  ["Discovery", "Розбираю задачу, аудиторію, бізнес-цілі та технічні обмеження."],
  ["Architecture", "Проєктую структуру застосунку, API, дані, ролі та інтеграції."],
  ["Interface", "Збираю адаптивний UI з чистою компонентною системою й акуратним motion."],
  ["Release", "Готую production build, SEO, деплой, домен, аналітику та стабільний запуск."]
];

const stackGroups = [
  {
    title: "Frontend",
    text: "Швидкі, адаптивні й візуально точні інтерфейси з якісною архітектурою компонентів.",
    items: ["Next.js", "Vue", "React"]
  },
  {
    title: "Backend та Desktop",
    text: "API, серверна логіка, адмін-панелі, desktop-обгортки й інтеграції під реальні процеси.",
    items: ["Nest.js", "Electron", "Laravel", "FastAPI"]
  },
  {
    title: "Databases",
    text: "Підбираю сховище під задачу: від реляційних моделей до документних і realtime-сценаріїв.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "будь-яка"]
  }
];

export default function Home() {
  return (
    <PortfolioMotion>
      <main>
        <nav className="nav-shell" aria-label="Головна навігація">
          <a className="brand" href="#top">VYNXGEN</a>
          <div className="nav-links">
            <a href="#about">Про мене</a>
            <a href="#work">Стек</a>
            <a href="#contact">Контакт</a>
          </div>
          <a className="nav-cta" href="https://t.me/maximilandriy" target="_blank" rel="noreferrer">
            <Send size={16} aria-hidden />
            Telegram
          </a>
        </nav>

        <section id="top" className="hero">
          <Image
            className="hero-image"
            src="/images/hero-portfolio.avif"
            alt="Темний преміальний робочий стіл з ноутбуком"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1 className="hero-title" aria-label="Fullstack Harmony">
              <span>FULLSTACK</span>
              <span>HARMONY</span>
            </h1>
            <p className="hero-copy">
              Я створюю преміальні web-продукти на Next.js: від стратегії й UX до backend-логіки,
              інтеграцій, анімацій та стабільного релізу на Vercel.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                Дивитись стек
                <ArrowUpRight size={18} aria-hidden />
              </a>
              <a className="ghost-link" href="https://github.com/Maks0101aps" target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden />
                GitHub
              </a>
              <a className="ghost-link freelancehunt-link" href="https://freelancehunt.com/freelancer/maximilandriyVYNX.html?from=shield&r=Jk3ax" target="_blank" rel="noopener noreferrer">
                <span className="fh-icon">FH</span>
                Freelancehunt
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about-section reveal">
          <div className="section-frame">
            <div className="about-copy">
              <p>
                Працюю як senior full-stack web developer для бізнесів, яким потрібен не просто сайт,
                а чітка цифрова система: швидка, виразна, масштабована й готова до росту.
              </p>
            </div>
            <h2>ПРО МЕНЕ</h2>
            <div className="orbit-map">
              <span className="orbit orbit-left" />
              <span className="orbit orbit-right" />
              <div className="circle-image float-image">
                <Image src="/images/about-studio.avif" alt="Атмосферна студія розробника" fill sizes="320px" />
              </div>
              <strong className="label label-left">ЗРУЧНІСТЬ</strong>
              <strong className="label label-center">ГАРМОНІЯ</strong>
              <strong className="label label-right">ЕСТЕТИКА</strong>
            </div>
            <p className="about-note">
              Поєдную дизайн-мислення, React-архітектуру, API, бази даних і продакшн-дисципліну,
              щоб інтерфейс виглядав дорого та працював без крихких місць.
            </p>
          </div>
        </section>

        <section className="tasks-section" id="work">
          <div className="tasks-intro reveal">
            <h2>ЯК Я<br />ЗБИРАЮ ПРОДУКТ</h2>
            <p>Веду проєкт як систему: від першого сенсу до стабільного релізу, де дизайн, frontend і backend працюють разом.</p>
          </div>
          <ol className="task-list reveal">
            {tasks.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="process-meta reveal" aria-label="Ключові акценти процесу">
            <span>UX</span>
            <span>API</span>
            <span>DB</span>
            <span>SEO</span>
            <span>Vercel</span>
          </div>
          <span className="large-orbit" />
        </section>

        <section className="projects-section reveal" id="stack">
          <div className="stack-heading">
            <h2>МОЇ МОВИ<br />ТА СТЕК</h2>
            <p>
              Закриваю повний цикл розробки: інтерфейс, серверну логіку, desktop-рішення,
              бази даних, інтеграції та продакшн-деплой.
            </p>
          </div>
          <div className="project-grid">
            {stackGroups.map((group, index) => (
              <article key={group.title}>
                <span className="stack-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <div className="tech-list" aria-label={`${group.title} technologies`}>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <ArrowUpRight size={20} aria-hidden />
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section reveal">
          <h2>ГОТОВИЙ ДО НОВОГО ПРОЄКТУ</h2>
          <p>Напиши, якщо потрібен сайт, SaaS, кабінет, інтеграції або редизайн з акуратною анімацією.</p>
          <div className="contact-actions">
            <a className="primary-link" href="https://t.me/maximilandriy" target="_blank" rel="noreferrer">
              <Send size={18} aria-hidden />
              @maximilandriy
            </a>
            <a className="ghost-link freelancehunt-link" href="https://freelancehunt.com/freelancer/maximilandriyVYNX.html?from=shield&r=Jk3ax" target="_blank" rel="noopener noreferrer">
              <span className="fh-icon">FH</span>
              Freelancehunt
            </a>
          </div>
        </section>
      </main>
    </PortfolioMotion>
  );
}
