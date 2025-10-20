import React, { useState } from 'react'
import './WorkExperience.css'
import { useLanguage } from '../contexts/LanguageContext'

function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const { language } = useLanguage()

  // Function to convert Markdown bold (**text**) and percentages to HTML
  const formatText = (text) => {
    if (!text) return text
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Convert **text** to <strong>text</strong>
      .replace(/(\d+%)/g, '<strong>$1</strong>') // Make percentages bold
  }

  const sectionTitle = language === 'en' ? 'Work Experience' : '工作經驗'
  const roleIntro = language === 'en'
    ? 'Jr. Backend Engineer at Agtop (Aug 2024 - Aug 2025), responsible for backend server construction, API design, CI/CD workflows, and backend management platform pages. Primarily using Node.js with exposure to Python Flask projects. Participated in early-stage planning, mid-stage implementation, and post-launch data maintenance across projects.'
    : '後端工程師，任職於銀濎科技 Agtop（2024年8月 - 2025年8月），負責公司後端伺服器建置、API 設計、CI/CD workflow、後端管理平台頁面。主要使用 Node.js，也接觸少數 Python Flask 專案。參與各專案的前期討論規劃、中期實作以及後期的資料維護。'

  const experiences = language === 'en' ? [
    {
      title: "ARhero Backend Design",
      subtitle: "Mobile Game App",
      description: "Full-stack development of a mobile AR game backend system, responsible for multimedia API design, database architecture, business logic implementation, and cloud deployment.",
      company: "Agtop",
      period: "Aug 2024 - Aug 2025",
      technologies: ["NodeJS", "SQL", "React", "AWS", "Docker"],
      keypoints: [
        "Independently developed multimedia API, database schema design, business logic and frontend admin interface, fully responsible for backend development.",
        "Utilized Draw.io to visualize complex workflows, unified team development standards, reducing meeting frequency from 2 times per week to 1 time, saving 50% meeting time.",
        "Redesigned API into two-phase transfer mechanism, coordinated with mobile backup strategy, reducing data transfer failure rate by 99%.",
        "Implemented GoAccess to automate API call log monitoring, combined with crontab scheduling for daily updates, reducing data collection time from 30 minutes to 5 minutes."
      ],
      architecture: {
        src: "/arhero-architecture.png",
        caption: "System Architecture: React + MUI admin panel with Node.js backend, Sequelize ORM connecting to MySQL, containerized with Docker and deployed on AWS EC2"
      },
      challenges: [
        {
          subtitle: "Data Transfer Reliability",
          challenge: "ARhero is an AR interactive game where users can record videos, generate music and text, with massive node data transmitted to servers for review before being published to the gaming platform. The main challenge was that during peak traffic, the server couldn't handle large data transfers, causing transmission failures. Without proper mobile-side backups, this led to significant data loss.",
          solution: "I proposed a two-phase data transfer approach: First, players upload game music and text data to the backend. During this process, the mobile app temporarily stores both text and media data. Only after backend confirmation is received does the app use a separate API to transfer the video. This minimized the risk of complete data loss.",
          result: "With mobile backup cooperation and multi-API design, **we achieved a 99% data preservation rate even during API failures - either on mobile or cloud storage. This dramatically reduced previous complete data loss incidents.**"
        },
        {
          subtitle: "Workflow Standardization",
          challenge: "However, this introduced another complexity: user permission management. Users might cancel game publication at any time, potentially causing inconsistencies between backend systems and user actions (e.g., an incomplete UGC game submission being overwritten by a new one).",
          solution: "I designed a comprehensive workflow and published it as a Draw.io diagram in the team chat. This unified standard allowed both mobile and backend engineers to coordinate on programming, database design, and UI modifications, significantly improving work efficiency.",
          result: "Through this workflow control, the mobile team clearly understood the state at each stage and possible next steps. In the early project phase, architecture meetings occurred twice weekly, often without definitive outcomes. After I unified APIs with Swagger and visualized various coupling scenarios, **meeting frequency decreased by 50% to once weekly, with greatly improved meeting efficiency**.",
          image: {
            src: "/workflow.png",
            caption: "UGC Game Publishing Workflow: Both frontend and backend can determine current state requirements through this diagram"
          }
        }
      ],
      monitoring: {
        subtitle: "API Monitoring Automation",
        text: "Previously, the company manually checked server logs to calculate API call counts, which was cumbersome on Ubuntu. I found GoAccess, an API traffic management package that, when embedded in the server with crontab scheduling for daily updates, **reduced data collection time from 30 minutes to 5 minutes, significantly improving data collection efficiency**.",
        image: {
          src: "/goaccess.png",
          caption: "GoAccess API Traffic Monitoring: Automated daily log analysis dashboard"
        }
      }
    },
    {
      title: "Dental Clinics Services System",
      subtitle: "B2B Project",
      description: "Developed a LINE-based appointment and management system for dental clinics, integrating backend APIs, cloud deployment, and LINE LIFF framework.",
      company: "Agtop",
      period: "Aug 2024 - Aug 2025",
      technologies: ["NodeJS", "SQL", "React", "AWS", "Docker", "Line LIFF"],
      keypoints: [
        "Established digitalized communication and appointment process between dental supply company and clinics, successfully reducing paper costs and shortening communication time by 50%, improving operational efficiency.",
        "Simplified menu update steps for admin staff, allowing direct external link modification through backend interface, reducing the process to just **2 steps** without modifying the codebase.",
        "Designed and implemented automated maintenance notification email system, reducing clinics' chance of missing service due to oversight by 50%.",
        "Proposed database redesign solution to decouple clinic entities from member data, reducing data inconsistency issues during personnel changes and improving system maintainability."
      ],
      projectIntro: "This project provides a LINE-based online appointment and record system for dental clinics serving as a B2B solution for a dental equipment company. I independently designed API construction, cloud deployment, backend admin pages, and integrated mobile pages into LINE Front-End Framework (LINE LIFF).",
      dentalArchitecture: {
        src: "/LINEMENU.drawio.png",
        caption: "System Architecture Diagram: Illustrates the three-tier architecture with LINE LIFF frontend, Node.js + Express backend, and MySQL database, along with the complete navigation flow and data flow between LINE Menu structure and functional modules (authentication, appointment scheduling, product management, notification system)"
      },
      lineMenu: {
        description: "I was responsible for LINE Menu and developing menu scripts based on UI-provided designs, configuring auto-replies, menu page navigation, and external website redirects.",
        images: [
          { src: "/line-app-1.png", caption: "Account Registration & Authentication" },
          { src: "/line-app-2.png", caption: "Maintenance Appointment Booking" },
          { src: "/line-app-3.png", caption: "Purchase History & Product Management" }
        ]
      },
      adminFeatures: {
        description: "The backend admin panel allows management of all dental clinic information: member LINE IDs, appointment schedules, and automated maintenance notification emails. Additionally, admins can directly modify LINE menu external links through the backend **without code changes, saving over 90% of menu update time**.",
        image: {
          src: "/line-menu.png",
          caption: "Admin panel can directly update LINE menu links and view/adjust clinic information"
        }
      },
      backendDesign: [
        {
          subtitle: "Database Architecture & Personnel Management",
          challenge: "The backend architecture faced challenges: How to verify applicants as clinic employees (anyone could register with a LINE ID)? How to revoke permissions when employees leave? The client initially wanted accounts tied to individuals, with one person representing each clinic and clinic email bound to the manager's LINE ID.",
          solution: "Considering potential personnel changes (resignation, promotion, etc.) that could cause data access issues or permission design difficulties, I proposed decoupling clinics from users. Multiple LINE IDs could associate with one clinic, and clinics could exist independently regardless of member count. This ensures that even with personnel changes, clinic entities and historical data remain accessible.",
          result: "The Clinics entity persists independently, maintaining product and maintenance data relationships even without active members. **This design reduced historical data loss from personnel turnover to 0% while making database logic clearer and easier to maintain**. For the requirements raised by the client, I strived to consider feasible optimization solutions and reached the most suitable approach through continuous communication.",
          images: [
            {
              src: "/before_imp.png",
              caption: "Before: Clinics directly bound to user accounts, causing data access issues during personnel changes"
            },
            {
              src: "/after_imp.png",
              caption: "After: Clinics exist independently, allowing multiple members while maintaining data integrity"
            }
          ]
        },
        {
          subtitle: "Identity Verification & Security",
          challenge: "Additionally, the client requested that I retain some management authority for backend staff regarding permission management. Specifically, the following two requirements: <br> (1) **Authority for manual identity verification** <br> (2) **Prevention of malicious account deletion** <br> Since LINE was adopted as the platform, any LINE account could freely apply for membership, creating authenticity concerns. During the implementation of this project, the dental supply company wanted to avoid delegating excessive authority to users while maintaining digitalization convenience.",
          solution: "I used clinic email as the unique key - the first member joining undergoes backend verification (confirming the email belongs to that clinic), while subsequent members only need verification emails sent to this address for internal clinic verification. The dental supply company doesn't need to manually verify each member but still retains backend staff verification for the first member's security. Considering that employee turnover frequency is relatively low, member removal can only be performed by backend staff, preventing malicious ejection of other members by clinic members.",
          result: "**This design saved 50% of human resources and time for individual manual verification while meeting the dental supply company's requirements**. In this project, I understood the client's requirements and identified design considerations, finding a balanced solution that maintains database architecture stability while meeting the client's needs."
        }
      ]
    },
    {
      title: "AI Tools Research",
      subtitle: "Internal R&D",
      description: "Research and prototyping of LLM-related tools, building local multimedia retrieval systems with ElasticSearch and CLIP model for cross-modal search capabilities.",
      company: "Agtop",
      period: "Aug 2024 - Aug 2025",
      technologies: ["ElasticSearch", "ChromaDB", "LangChain", "Multimedia Search"],
      keypoints: [
        "Identified AI integration opportunities and built prototypes every three days, rapidly iterating and testing application possibilities of various LLM-related tools.",
        "Researched and implemented open-source music generation tool MusicGPT to replace OpenAI API, successfully saving 20% of API cost expenses.",
        "Built a fully local multimedia retrieval system prototype, integrating ElasticSearch with CLIP model to enable cross-format image-text search functionality.",
        "System testing achieved: 98% text-to-text, 82% text-to-image, 70% image-to-image accuracy, reducing 30% time cost compared to manual search."
      ],
      overview: "In this local search project, I researched various LLM-related tools including MCP server (Cline), LangChain, CLIP model, and vector databases. I was responsible for selecting appropriate tools and implementing a fully local multimedia data retrieval system. By combining traditional keyword search system ElasticSearch with CLIP model, I achieved cross-modal search capabilities - enabling text-to-text, text-to-image, and image-to-image search experiences.",
      resultsText: "Testing with 500MB (approximately 5,000 pages of PDF documents), performing 1,000 searches with randomly extracted keywords or LLM-condensed documents, the top 50 search results containing correct documents showed: Text-to-text: 98%, Text-to-image: 82%, Image-to-image: 70%. Considering the time required without a cross-format search system, **testing demonstrated at least 30% reduction in search time while completely eliminating the risk of confidential data exposure to network attacks**.",
      resultsImage: {
        src: "/searchsys.drawio.png",
        caption: "Local Search System Architecture: ElasticSearch combined with CLIP model for cross-modal retrieval"
      }
    }
  ] : [
    {
      title: "ARhero 後端設計",
      subtitle: "手機遊戲應用",
      description: "手機 AR 遊戲後端系統全棧開發，負責多媒體 API 設計、資料庫架構、商業邏輯實作與雲端部署。",
      company: "Agtop",
      period: "2024年8月 - 2025年8月",
      technologies: ["NodeJS", "SQL", "React", "AWS", "Docker"],
      keypoints: [
        "獨立開發多媒體 API、資料庫架構設計、商業邏輯與前端管理介面，全權負責專案後端開發",
        "利用 Draw.io 視覺化複雜工作流程，統一團隊開發標準，會議頻率從每週 2 次降為 1 次，減少 50% 會議時間",
        "重新設計 API 為兩階段傳輸機制，配合 mobile 端備份策略，將資料傳輸失敗率降低 99%",
        "導入 GoAccess 自動化監控 API 呼叫日誌，搭配 crontab 排程每日更新，將數據收集時間從半小時減少至 5 分鐘"
      ],
      architecture: {
        src: "/arhero-architecture.png",
        caption: "系統架構：React + MUI 管理後台，Node.js 後端使用 Sequelize ORM 連接 MySQL 資料庫，使用 Docker 容器化並部署在 AWS EC2 上"
      },
      challenges: [
        {
          subtitle: "資料傳輸可靠性",
          challenge: "ARhero 是一個 AR 互動式遊戲，使用者可以自己錄製影片、生成音樂、文字以及大量節點資料透過 API 傳遞到伺服器進行審核，最終上架至遊戲平台。我在這個專案遇到的主要問題是，當**尖峰流量時伺服器很容易無法進行大量資料的傳輸**，造成**資料傳遞失敗**，而 mobile 端如果未備份很容易造成**大量的資料丟失**。",
          solution: "我提出**分段式的資料傳遞方式**：第一階段玩家必須先把遊戲的音樂以及文字資料先傳遞到後端，在等待的過程中，**mobile 端需要先暫存文字以及影音資料**。並等待後端確認接收到資料後，才利用另一支 API 傳遞影片，這樣**降低資料全部丟失的風險**。",
          result: "**在與 mobile 端 backup 的協助、以及多 API 設計的幫助下，99% 以上的情況，即使在 API 傳送失敗的狀況下，仍能保證文字資料與影片資料至少存在 mobile 或是雲端上面，大幅減少之前資料完全丟失的情況。**"
        },
        {
          subtitle: "工作流程標準化",
          challenge: "然而這樣衍伸出另一個問題：使用者權限的複雜性。在任何狀態下，使用者可能想要隨時取消遊戲的發布，而在隨機一個時間取消可能會造成後台系統與使用者行為不一致（例如：上一個 UGC 遊戲未完成送審即被下一個 UGC 遊戲的內容覆蓋掉）。",
          solution: "我不僅思考出比較合理的解決流程，並以 Draw.io 的流程圖發布在群組中，這樣所有人都可以依據同一套標準進行程式設計、資料庫規劃、前端 UI 配合改動等等，大大的增進工作效率和流程。",
          result: "透過這樣的流程控制，mobile端明確理解各階段的狀態與可能的下一步。專案前期的架構會議頻率為一週 2 次，每次會議不一定有結果。後期當我把 API 用 Swagger 統整起來，以及圖像化各式各樣的耦合情況後，**相關專案開會頻率下降 50% 成為一週 1 次，會議效率大幅提升**",
          image: {
            src: "/workflow.png",
            caption: "UGC 遊戲發布流程：前後端都可以透過 diagram 得知當前應該要有的狀態"
          }
        }
      ],
      monitoring: {
        subtitle: "API 監控自動化",
        text: "另外，以往公司主要是直接去 server 裡面看 log，計算 API 呼叫次數，在 Ubuntu 上面計算 API 流量的方式過於繁雜。我找到一個 API 流量管理的套件 GoAccess，這個套件只要嵌入在 server 內部，利用 crontab 排程每日更新流量紀錄的靜態檔案，**將數據收集時間從半小時減少至 5 分鐘，大幅提升數據蒐集的效率**。",
        image: {
          src: "/goaccess.png",
          caption: "GoAccess API 流量監控：自動化每日日誌分析儀表板"
        }
      }
    },
    {
      title: "牙科診所服務系統",
      subtitle: "B2B 專案",
      description: "開發以 LINE 為基礎的牙科診所預約與管理系統，整合後端 API、雲端部署與 LINE LIFF 框架。",
      company: "Agtop",
      period: "2024年8月 - 2025年8月",
      technologies: ["NodeJS", "SQL", "React", "AWS", "Docker", "Line LIFF"],
      keypoints: [
        "為牙材公司與診所之間建立數位化溝通與預約流程，成功降低紙張成本並縮短雙方溝通時間達 50%，提升作業效率",
        "簡化管理人員的選單更新步驟，透過後端介面直接修改外部連結，將流程簡化為僅需** 2 步驟**，無需修改程式碼",
        "設計並實作自動寄發維護保養通知信件功能，減少 50% 診所因疏忽而錯過服務的機率",
        "提出資料庫重新設計方案，將診所實體與成員資料解耦，降低人員異動時資料不一致問題，提升系統可維護性"
      ],
      projectIntro: "這個專案為一間醫材公司提供以 LINE 為主體的線上預約及預約紀錄系統，使用對象為各牙醫醫療診所。在這個專案中，我獨立設計了 API 建置、雲端部署、後台 admin 頁面以及將 mobile 頁面放入 LINE Front-End Framework (LINE LIFF) 的設計。",
      dentalArchitecture: {
        src: "/LINEMENU.drawio.png",
        caption: "系統架構圖：展示 LINE LIFF 前端、Node.js + Express 後端、MySQL 資料庫三層式架構，以及 LINE Menu 選單結構與各功能模組（帳號認證、預約排程、產品管理、通知系統）之間的完整導航流程與資料流向"
      },
      lineMenu: {
        description: "我負責 LINE Menu，編寫 menu 腳本，依據 UI 提供的美術圖，設定為應有的自動回復、Menu 頁面跳轉或是導向至外部網站。",
        images: [
          { src: "/line-app-1.png", caption: "帳號註冊與認證" },
          { src: "/line-app-2.png", caption: "維修保養預約" },
          { src: "/line-app-3.png", caption: "購買紀錄與產品管理" }
        ]
      },
      adminFeatures: {
        description: "醫材公司可以透過後台 admin 頁面管理所有牙醫診所的相關資訊，譬如：各牙醫診所的成員所綁定的 LINE ID、預約排程紀錄、並可排程自動寄發維修保養通知信件給牙醫診所。另外也可以透過後台直接修改 LINE menu 所導向的外部連結，**不需要修改程式碼，節省 90% 以上的時間更新 menu 資訊**。",
        image: {
          src: "/line-menu.png",
          caption: "後台管理可直接更新line menu連結、並調檢視調整各整所資訊"
        }
      },
      backendDesign: [
        {
          subtitle: "資料庫架構與人員管理",
          challenge: "在後端架構設計上，遇到的困難是要如何驗證申請的使用者為此診所員工（任何人都可以用 LINE ID 註冊帳號）、或是當某員工從診所離職後，該如何消滅之前被賦予的權利。原先醫材甲方希望將帳號綁定在使用者身上，以一人代表一間診所處理牙醫器材的相關事項，將診所 email 綁定到負責人的 LINE ID 上面。",
          solution: "考量到負責人可能異動（離職、職位升遷等等），可能會造成無法存取歷史資料或是權限設計困難，我建議不要將診所與負責人綁定，且允許多個 LINE ID 可以關聯至同一診所，而診所可以在無論有無成員的狀況下獨立存在。這樣即使成員異動，診所個體以及歷史資料仍然可以存取。",
          result: "Clinics 主體將持續存在，即便沒有任何成員，仍可以保持 products 和 maintenances 資料的關聯。**將人員異動使得丟失歷史資料的機率降為 0%，同時也讓資料庫邏輯更清晰且容易維護**。對於對方提出的要求，我盡可能思考可行的優化方案，並透過不斷溝通來達到最適合的解決方案。",
          images: [
            {
              src: "/before_imp.png",
              caption: "改善前：診所直接綁定使用者帳號，人員異動時會造成資料存取問題"
            },
            {
              src: "/after_imp.png",
              caption: "改善後：診所獨立存在，允許多位成員同時維持資料完整性"
            }
          ]
        },
        {
          subtitle: "身分驗證與安全性",
          challenge: "另外，醫材甲方在權限管理上面要求我可以保留些許管理權限給後台人員。特別是以下兩個改動 <br>  (1) **手動驗證真實身分的權限** <br> (2) **避免惡意帳號刪除** <br> 因採取line作為平台，任何line帳號皆可以自由地申請會員帳戶，因此會形成身分真實性的問題。在實作該專案的過程中，醫材公司方面希望不要下放過多的權力給用戶，同時又想要達到數位化的便利性。",
          solution: "我將診所 email 作為診所的唯一鍵，第一位加入的成員接受後台人員查核（確認他設定的 email 屬於該診所），後續成員只需要寄發驗證信到此 email，由該診所內部核實，就可以確認身分。醫材公司方面不需要手動檢查每一位成員，但仍保留後台人員對第一位成員查核的安全性。考量到員工離職頻率並不高，移除診所成員僅能透過後台人員操作，可以防止診所成員惡意剔除其他成員。",
          result: "**這樣的設計節省了50%逐一人工審核的人力資源以及時間，同時也達到了醫材公司希望做到的要求**。在這個專案中我透過理解醫材公司的需求以及專案設計的缺點，找到折衷的方案既可以維持資料架構的穩定性，同時配合醫材公司想做到的要求。"
        }
      ]
    },
    {
      title: "AI 工具研究",
      subtitle: "內部研發",
      description: "研究與原型開發 LLM 相關工具，建立地端多媒體檢索系統，整合 ElasticSearch 與 CLIP model 實現跨格式搜尋。",
      company: "Agtop",
      period: "2024年8月 - 2025年8月",
      technologies: ["ElasticSearch", "ChromaDB", "LangChain", "Multimedia Search"],
      keypoints: [
        "識別 AI 整合機會並每三天建立原型，快速迭代測試各種 LLM 相關工具的應用可能性",
        "研究並導入開源音樂生成工具 MusicGPT 替代 OpenAI API，成功節省 20% API 費用成本",
        "建立完全地端的多媒體檢索系統原型，整合 ElasticSearch 與 CLIP model，實現圖文交互搜尋功能",
        "系統測試達成：以文搜文 98%、以文搜圖 82%、以圖搜圖 70% 準確率，相較人工搜尋減少 30% 時間成本"
      ],
      overview: "在地端搜尋專案中，我負責研究各種 LLM 相關工具，包含 MCP server (Cline)、LangChain、CLIP model、vector database。我負責挑選適合的工具與實作一個完全地端的多媒體資料檢索系統。透過傳統的關鍵字搜尋系統 ElasticSearch 配合 CLIP model，可以實現圖、文交互搜尋的系統體驗。",
      resultsText: "以 500MB（約 5000 頁文字 PDF 檔）實測，隨機擷取關鍵字、或以 LLM 濃縮之文檔進行 1000 次搜尋，羅列出搜尋結果前 50 筆包含正確文件的搜尋結果：以文搜文：98%、以文搜圖：82%、以圖搜圖：70%。考量到無圖文搜尋系統所需要花費的時間，整體上來說，**實測至少減少 30% 以上的搜尋時間，並且完全規避機密資料暴露在網路攻擊下的危險**。",
      resultsImage: {
        src: "/searchsys.drawio.png",
        caption: "地端搜尋系統架構：ElasticSearch 結合 CLIP model 實現跨格式檢索"
      }
    }
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="work-experience" className="work-experience">
      <div className="section-container">
        <h2 className="section-title">{sectionTitle}</h2>

        <div className="role-introduction">
          <div className="role-header">
            <div className="role-left">
              <h3 className="role-company">
                <a href="https://www.agtopnet.com/" target="_blank" rel="noopener noreferrer">
                  {language === 'en' ? 'Agtop' : '銀濎科技 Agtop'}
                </a>
              </h3>
              <p className="role-title">{language === 'en' ? 'Jr. Backend Engineer' : '後端工程師'}</p>
            </div>
            <div className="role-right">
              <p className="role-period">{language === 'en' ? 'Aug 2024 - Aug 2025' : '2024年8月 - 2025年8月'}</p>
              <p className="role-location">{language === 'en' ? 'Taipei, Taiwan' : '台北，台灣'}</p>
            </div>
          </div>
          <p className="role-description">
            {language === 'en'
              ? 'Responsible for backend server construction, API design, CI/CD workflows, and backend management platform pages. Primarily using Node.js with exposure to Python Flask projects. Participated in early-stage planning, mid-stage implementation, and post-launch data maintenance across projects.'
              : '負責公司後端伺服器建置、API 設計、CI/CD workflow、後端管理平台頁面。主要使用 Node.js，也接觸少數 Python Flask 專案。參與各專案的前期討論規劃、中期實作以及後期的資料維護。'}
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              key={index}
              id={`work-exp-${index}`}
              className={`experience-card ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <div className="card-header" onClick={() => toggleExpand(index)}>
                <div className="header-left">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-subtitle">{exp.subtitle}</p>
                </div>
                <div className="expand-icon">
                  {expandedIndex === index ? '−' : '+'}
                </div>
              </div>

              {/* Technologies visible even when collapsed */}
              <div className="technologies-preview">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="card-content">
                {/* Description subtitle */}
                {exp.description && (
                  <div className="content-description">
                    <p>{exp.description}</p>
                  </div>
                )}

                <ul className="achievements">
                  {exp.keypoints.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: formatText(point) }}></li>
                  ))}
                </ul>

                {/* Project Introduction for Dental Clinic */}
                {exp.projectIntro && (
                  <div className="project-intro-section">
                    <p className="project-intro-text" dangerouslySetInnerHTML={{ __html: formatText(exp.projectIntro) }}></p>
                  </div>
                )}

                {/* Dental Clinic Architecture */}
                {exp.dentalArchitecture && (
                  <div className="architecture-section">
                    <div className="content-with-image">
                      <div className="image-container-small">
                        <img src={exp.dentalArchitecture.src} alt="Dental Architecture" />
                      </div>
                      <p className="image-caption">{exp.dentalArchitecture.caption}</p>
                    </div>
                  </div>
                )}

                {/* System Architecture */}
                {exp.architecture && (
                  <div className="architecture-section">
                    <div className="content-with-image">
                      <div className="image-container-medium">
                        <img src={exp.architecture.src} alt="Architecture" />
                      </div>
                      <p className="image-caption">{exp.architecture.caption}</p>
                    </div>
                  </div>
                )}

                {/* ARhero Challenges - Three Column Layout */}
                {exp.challenges && exp.challenges.map((item, i) => (
                  <div key={i} className="challenge-section">
                    {item.subtitle && (
                      <h4 className="section-subtitle">{item.subtitle}</h4>
                    )}
                    <div className={`three-column-row ${language === 'en' ? 'vertical-layout' : ''}`}>
                      <div className="column-challenge">
                        <h5>
                          <span className="column-icon">⚠️</span>
                          {language === 'en' ? (i === 0 ? 'Challenge' : 'Extended Challenge') : (i === 0 ? '瓶頸' : '延伸瓶頸')}
                        </h5>
                        <p dangerouslySetInnerHTML={{ __html: formatText(item.challenge) }}></p>
                      </div>
                      <div className="column-solution">
                        <h5>
                          <span className="column-icon">💡</span>
                          {language === 'en' ? 'Solution' : '解決方式'}
                        </h5>
                        <p dangerouslySetInnerHTML={{ __html: formatText(item.solution) }}></p>
                      </div>
                      <div className="column-result">
                        <h5>
                          <span className="column-icon">✅</span>
                          {language === 'en' ? 'Result' : '成果'}
                        </h5>
                        <p dangerouslySetInnerHTML={{ __html: formatText(item.result) }}></p>
                      </div>
                    </div>
                    {item.image && (
                      <div className="challenge-image-row">
                        <div className="image-container-medium">
                          <img src={item.image.src} alt="Workflow" />
                        </div>
                        <p className="image-caption">{item.image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Monitoring Section */}
                {exp.monitoring && (
                  <div className="monitoring-section">
                    {exp.monitoring.subtitle && (
                      <h4 className="section-subtitle">{exp.monitoring.subtitle}</h4>
                    )}
                    <p className="monitoring-text" dangerouslySetInnerHTML={{ __html: formatText(exp.monitoring.text) }}></p>
                    {exp.monitoring.image && (
                      <div className="content-with-image">
                        <div className="image-container-small">
                          <img src={exp.monitoring.image.src} alt="Monitoring" />
                        </div>
                        <p className="image-caption">{exp.monitoring.image.caption}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* LINE Menu Section */}
                {exp.lineMenu && (
                  <div className="line-menu-section">
                    <h4 className="section-subtitle">{language === 'en' ? 'LINE Menu + LINE LIFF App' : 'LINE Menu + LINE LIFF App'}</h4>
                    <p className="section-description" dangerouslySetInnerHTML={{ __html: formatText(exp.lineMenu.description) }}></p>
                    <div className="line-apps-horizontal">
                      {exp.lineMenu.images.map((img, i) => (
                        <div key={i} className="line-app-item">
                          <img src={img.src} alt={img.caption} />
                          <p className="image-caption-small">{img.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Admin Features Section */}
                {exp.adminFeatures && (
                  <div className="admin-section">
                    <h4 className="section-subtitle">{language === 'en' ? 'Backend Admin Platform' : '後台 Admin'}</h4>
                    <p className="section-description" dangerouslySetInnerHTML={{ __html: formatText(exp.adminFeatures.description) }}></p>
                    {exp.adminFeatures.image && (
                      <div className="content-with-image">
                        <div className="image-container-small">
                          <img src={exp.adminFeatures.image.src} alt="Admin" />
                        </div>
                        <p className="image-caption">{exp.adminFeatures.image.caption}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Backend Design - Three Column Layout */}
                {exp.backendDesign && (
                  <div className="backend-design-section">
                    <h4 className="section-subtitle">{language === 'en' ? 'Backend Design' : '後端設計'}</h4>

                    {exp.backendDesign.map && exp.backendDesign.map((item, i) => (
                      <div key={i} className="challenge-section">
                        {item.subtitle && (
                          <h4 className="section-subtitle">{item.subtitle}</h4>
                        )}
                        <div className={`three-column-row ${language === 'en' ? 'vertical-layout' : ''}`}>
                          <div className="column-challenge">
                            <h5>
                              <span className="column-icon">⚠️</span>
                              {language === 'en' ? 'Challenge' : '問題'}
                            </h5>
                            <p dangerouslySetInnerHTML={{ __html: formatText(item.challenge) }}></p>
                          </div>
                          <div className="column-solution">
                            <h5>
                              <span className="column-icon">💡</span>
                              {language === 'en' ? 'Solution' : '解決方式'}
                            </h5>
                            <p dangerouslySetInnerHTML={{ __html: formatText(item.solution) }}></p>
                          </div>
                          <div className="column-result">
                            <h5>
                              <span className="column-icon">✅</span>
                              {language === 'en' ? 'Result' : '成果'}
                            </h5>
                            <p dangerouslySetInnerHTML={{ __html: formatText(item.result) }}></p>
                          </div>
                        </div>
                        {item.images && (
                          <div className="before-after-images">
                            {item.images.map((img, imgIndex) => (
                              <div key={imgIndex} className="content-with-image">
                                <div className="image-container-medium">
                                  <img src={img.src} alt={img.caption} />
                                </div>
                                <p className="image-caption">{img.caption}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* AI Tools Overview and Results */}
                {exp.overview && (
                  <div className="overview-section">
                    <p className="overview-text" dangerouslySetInnerHTML={{ __html: formatText(exp.overview) }}></p>
                  </div>
                )}

                {exp.resultsText && (
                  <div className="results-section">
                    <p className="results-text" dangerouslySetInnerHTML={{ __html: formatText(exp.resultsText) }}></p>
                    {exp.resultsImage && (
                      <div className="content-with-image">
                        <div className="image-container-medium">
                          <img src={exp.resultsImage.src} alt="Results" />
                        </div>
                        <p className="image-caption">{exp.resultsImage.caption}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
