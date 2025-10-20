export const content = {
  header: {
    en: {
      name: "PAI LE-CHI",
      title: "Backend Engineer",
      links: {
        github: "GitHub",
        email: "Email",
        phone: "Phone",
        resume: "Resume Download"
      }
    },
    zh: {
      name: "白樂祺",
      title: "後端工程師",
      links: {
        github: "GitHub",
        email: "電子郵件",
        phone: "電話",
        resume: "履歷下載"
      }
    }
  },

  sections: {
    en: {
      aboutMe: "About Me",
      workExperience: "Work Experience",
      sideProjects: "Side Projects",
      education: "Education & Research"
    },
    zh: {
      aboutMe: "關於我",
      workExperience: "工作經驗",
      sideProjects: "個人專案",
      education: "教育背景與研究"
    }
  },

  aboutMe: {
    en: {
      introduction: "I'm a programmer who primarily uses Node.js for server and API development, along with React for simple frontend work, having completed several full-stack projects. I love solving real-world problems through code—this is my original intention for becoming an engineer. I'm interested in many things: statistics, blockchain, writing, and more. Sometimes I share what I've learned from my own perspective, always thinking about how to explain complex things clearly.",
      highlights: []
    },
    zh: {
      introduction: "我是一名程式設計師，目前主要使用node.js來撰寫伺服器與api，同時也使用react進行簡單的前端開發，做過幾個全端專案。我喜歡以程式解決實際遇到的問題，這是我成為工程師的初衷。我喜歡很多東西，統計知識、區塊鏈、寫作等等。有時候我把學過的東西用自己的觀點分享出來，總是想著怎麼把複雜的東西說的清楚。",
      highlights: []
    }
  },

  workExperience: {
    en: [
      {
        title: "ARhero Backend Design",
        subtitle: "Mobile Game App",
        company: "Agtop",
        period: "Aug 2024 - Aug 2025",
        location: "Taipei, Taiwan",
        role: "Jr. Backend Engineer",
        technologies: ["NodeJS", "SQL", "React", "AWS", "Docker"],
        achievements: [
          "Independently developed multimedia API, database schema, business logic, and frontend admin interface.",
          "Leveraged Draw.io to map development workflows, increasing team cooperation efficiency by 30%.",
          "Automated deployment, reducing 50% of time spent on Docker setup and test/product environments switching.",
          "Reduced data collection time from 30 minutes to 5 minutes by implementing GoAccess to monitor daily API call logs.",
          "Implemented staged data transfer approach: 99% data preservation rate even during API failures through mobile backup and multi-API design.",
          "Reduced meeting frequency by 50% (from 2x to 1x per week) through Swagger API documentation and workflow diagrams, focusing on new issues instead of recurring old problems."
        ],
        architecture: {
          image: "/arhero-architecture.png",
          description: "System Architecture: React + MUI admin panel, Node.js backend with Sequelize ORM connecting to MySQL database. Containerized with Docker and deployed on AWS EC2 with GitLab version control."
        },
        workflow: {
          image: "/workflow.png",
          description: "UGC Game Publishing Workflow: State management diagram for mobile and backend coordination, preventing data inconsistency during user cancellation. All team members follow unified standards for development, database design, and UI modifications."
        },
        monitoring: {
          image: "/goaccess.png",
          description: "API Traffic Monitoring: Implemented GoAccess for automated daily log analysis, reducing data collection time from 30 minutes to 5 minutes."
        }
      },
      {
        title: "Dental Clinics Services System",
        subtitle: "B2B Project",
        company: "Agtop",
        period: "Aug 2024 - Aug 2025",
        location: "Taipei, Taiwan",
        role: "Jr. Backend Engineer",
        technologies: ["NodeJS", "SQL", "React", "AWS", "Docker", "Line LIFF", "Google Sheet API", "Material UI"],
        achievements: [
          "Reduced 99% paper cost and 60% communication time for both the dental supply company and clinics.",
          "Integrated all APIs into LINE Menu, giving users 100% mobile access to authentication, checks, and bookings.",
          "Sent automated maintenance notifications, reducing clinics' chance of missing service by 50%.",
          "Developed a temporary Google Sheets API before frontend launch, enabling clients to manage backend data and saving 70% of their access/edit time.",
          "Designed database schema separating clinics from members, ensuring 0% historical data loss during staff turnover.",
          "Reduced manual verification workload by 50% through email-based clinic verification while maintaining security.",
          "Prevented malicious member removal by restricting deletion to admin-only operations."
        ],
        lineMenu: {
          images: ["/line-menu.png", "/line-app-1.png", "/line-app-2.png", "/line-app-3.png"],
          description: "LINE LIFF Integration: Full service system accessible through LINE menu, enabling appointment booking, product registration, purchase history viewing, and more. Reduced clinic administrative time by 50% and customer service workforce needs by 20%."
        },
        database: {
          image: "/database-schema.png",
          description: "Database Schema: Clinics entity persists independently of members, maintaining product and maintenance data relationships even without active members. This design ensures historical data preservation during staff transitions."
        }
      },
      {
        title: "AI Tools Research",
        subtitle: "Internal R&D",
        company: "Agtop",
        period: "Aug 2024 - Aug 2025",
        location: "Taipei, Taiwan",
        role: "Jr. Backend Engineer",
        technologies: ["ElasticSearch", "ChromaDB", "LangChain", "MCP", "Text Search", "Cline", "Vector Search", "CLIP Model"],
        achievements: [
          "Tested local small model (Breeze2-8B) and explored applications integrating LangChain and Tool Use.",
          "Provided a local music generation tool, MusicGPT, for ARhero, reducing OpenAI API costs by 80%.",
          "Built a fully local multimedia retrieval system using Elastic Search and CLIP model for cross-format search.",
          "Achieved search accuracy: 98% text-to-text, 82% text-to-image, 70% image-to-image (tested with 500MB/5000 pages).",
          "Reduced search time by 30% compared to manual searching while eliminating data exposure risks to network attacks."
        ],
        searchSystem: {
          image: "/search-system.png",
          description: "Local Search System Architecture: Combines Elastic Search for traditional keyword search with CLIP model for cross-modal retrieval. Supports text-to-text, text-to-image, and image-to-image search with OCR integration for diagram text extraction."
        }
      }
    ],
    zh: [
      {
        title: "ARhero 後端設計",
        subtitle: "手機遊戲後端開發",
        company: "Agtop",
        period: "2024年8月 - 2025年8月",
        location: "台北，台灣",
        role: "後端工程師",
        technologies: ["NodeJS", "SQL", "React", "AWS", "Docker"],
        achievements: [
          "獨立開發多媒體 API、資料庫架構、商業邏輯和前端管理介面。",
          "使用 Draw.io 規劃開發流程，提升團隊合作效率 30%。",
          "自動化部署，減少 50% Docker 設定和測試/正式環境切換時間。",
          "實作 GoAccess 監控每日 API 呼叫日誌，將數據收集時間從半小時減少至 5 分鐘。",
          "實作分段式資料傳遞方式：透過 mobile 備份與多 API 設計，即使在 API 傳送失敗的狀況下，仍能保證 99% 以上資料至少存在 mobile 或雲端上面。",
          "透過 Swagger API 文件整理以及圖像化各式耦合情況，專案開會頻率下降 50%（從一週 2 次降為 1 次），每次會議針對新問題而非反覆討論舊問題。"
        ],
        architecture: {
          image: "/arhero-architecture.png",
          description: "系統架構：React + MUI 管理後台，Node.js 後端使用 Sequelize ORM 連接 MySQL 資料庫。使用 Docker 容器化並部署在 AWS EC2 上，透過 GitLab 進行版本控制。"
        },
        workflow: {
          image: "/workflow.png",
          description: "UGC 遊戲發布流程：Mobile 與 Backend 狀態管理流程圖，避免使用者取消發布時造成後台系統與使用者行為不一致。所有團隊成員遵循同一套標準進行程式設計、資料庫規劃、前端 UI 配合改動。"
        },
        monitoring: {
          image: "/goaccess.png",
          description: "API 流量監控：實作 GoAccess 套件，利用 crontab 排程每日更新流量紀錄的靜態檔案，將數據收集時間從半小時減少至 5 分鐘。"
        }
      },
      {
        title: "牙科診所服務系統",
        subtitle: "B2B 專案",
        company: "Agtop",
        period: "2024年8月 - 2025年8月",
        location: "台北，台灣",
        role: "後端工程師",
        technologies: ["NodeJS", "SQL", "React", "AWS", "Docker", "Line LIFF", "Google Sheet API", "Material UI"],
        achievements: [
          "減少 99% 紙張成本和 60% 溝通時間。",
          "整合所有 API 到 LINE 選單，實現 100% 行動化存取。",
          "自動發送維護通知，減少 50% 診所錯過服務的機率。",
          "開發臨時 Google Sheets API，節省客戶 70% 存取/編輯時間。",
          "設計診所與成員分離的資料庫架構，確保員工異動時歷史資料丟失率降為 0%。",
          "透過 email 驗證機制，相比傳統人工檢查每位成員，減少 50% 的人力與時間，同時保留後台對第一位成員查核的安全性。",
          "移除診所成員僅能透過後台操作，防止診所成員惡意剔除其他成員。"
        ],
        lineMenu: {
          images: ["/line-menu.png", "/line-app-1.png", "/line-app-2.png", "/line-app-3.png"],
          description: "LINE LIFF 整合：完整服務系統透過 LINE 選單存取，可進行帳號註冊、預約維修保養、檢視已購買物件、註冊已購買產品等。牙醫診所減少 50% 預約維修、註冊產品的程序時間，醫材公司降低 20% 真人客服的人力需求。"
        },
        database: {
          image: "/database-schema.png",
          description: "資料庫架構：Clinics 主體持續存在，即便沒有任何成員，仍可保持 products 和 maintenances 資料的關聯。將人員異動使得丟失歷史資料的機率降為 0%。"
        }
      },
      {
        title: "AI 工具研究",
        subtitle: "內部研發",
        company: "Agtop",
        period: "2024年8月 - 2025年8月",
        location: "台北，台灣",
        role: "後端工程師",
        technologies: ["ElasticSearch", "ChromaDB", "LangChain", "MCP", "Text Search", "Cline", "Vector Search", "CLIP Model"],
        achievements: [
          "測試本地小模型（Breeze2-8B）並探索 LangChain 和 Tool Use 整合應用。",
          "提供本地音樂生成工具 MusicGPT，減少 80% OpenAI API 成本。",
          "建立完全地端的多媒體資料檢索系統，透過 Elastic Search 配合 CLIP model 實現圖、文交互搜尋。",
          "達成搜尋準確率：以文搜文 98%、以文搜圖 82%、以圖搜圖 70%（500MB/約 5000 頁測試）。",
          "相比無圖文搜尋系統，實測至少減少 30% 以上的搜尋時間，並且完全規避機密資料暴露在網路攻擊下的危險。"
        ],
        searchSystem: {
          image: "/search-system.png",
          description: "地端搜尋系統架構：結合傳統關鍵字搜尋系統 Elastic Search 與 CLIP model，實現跨格式檢索。支援以文搜文、以文搜圖、以圖搜圖，並透過 OCR 工具提取圖表中的文字。"
        }
      }
    ]
  },

  sideProjects: {
    en: [
      {
        name: "Chain-Split",
        description: "Onchain Bill Split Project",
        status: "Ongoing",
        technologies: ["Rust", "Solana", "Javascript", "Firebase", "React Native", "NoSQL", "Claude code"],
        highlights: [
          "Used Claude code to assist coding, reducing development time by 70%, improving readability.",
          "Designed and implemented Anchor smart contracts to realize multi-signature mechanism, proactively exploring and applying emerging technologies to enhance system innovation.",
          "Made tradeoffs between on-chain and centralized storage, balancing cost and security to determine optimal high-level architecture design."
        ],
        link: "https://github.com/lechipai0209/Chain-Split",
        detailedContent: {
          intro: "This is a blockchain-based bill-splitting software system. Compared to traditional bill-splitting apps, blockchain ledgers can explicitly record accounting proof and enable direct on-chain payment transfers. In this project, I learned Rust to write smart contracts, experimented with Firebase as a backend service, and used Claude code to generate preliminary React Native frontend interfaces. The initial smart contract prototype has been deployed to devnet: EYR8PHamGh1S1PM7d7txEDzyqfGfnchMbQ6tNHMBBsfX",
          architectureImage: "/chain-split.drawio.png",
          challenges: [
            {
              title: "Simulating Multi-Signature Mode",
              problem: "The Anchor framework does not natively support multi-party signature protocols, making hardware-independent multi-signature impossible. In bill-splitting logic, when a payer advances payment for others, creating an expense record requires confirmation from all debtors; otherwise, anyone could falsely claim to have paid on behalf of others. This requires multi-signature-like functionality.",
              problemImages: [
                { src: "/chain-split-multisig.png", alt: "Multi-signature Flow Diagram" }
              ],
              solution: "While true hardware-based multi-signature is not possible, I leveraged Anchor's account model characteristics to implement multi-signature logic: each request first verifies the requester's identity by confirming they possess the corresponding private key. When the payer wants to finalize the payment record, the following checks are performed:",
              checks: [
                "Verify the payer (requester) is indeed the transaction's payer",
                "Debtors modify account variables through other requests to collectively approve the expense",
                "Only unconfirmed transactions can be confirmed through this function"
              ],
              solutionImages: [
                { src: "/chain-split-code1.png", alt: "Multi-signature Implementation Code" }
              ],
              result: "Since both payers confirming expenses and debtors approving payments can be verified as private key holders, **the Anchor framework achieves secure multi-signature simulation**.",
              highlight: "**The smart contract framework couldn't execute my ideal functionality, yet I still devised alternative solutions to achieve the desired final effect.**"
            },
            {
              title: "High Transaction Costs",
              problem: "Long-term on-chain data storage requires substantial rent fees, making small transaction records prohibitively expensive—the required rent far exceeds the transaction amounts themselves.",
              solution: "Integrated centralized database Firebase Firestore to store low-sensitivity and non-essential documents. For example: group and user Chinese names, and transaction descriptions. Chinese characters occupy 3 bytes each, triple that of English.",
              solutionImages: [
                { src: "/chain-split-code2.png", alt: "Cost Optimization Code" }
              ],
              result: "A group account with up to 20 members stores only essential information on-chain (~760 bytes), costing approximately 0.00618 SOL. Chinese account names and 20 member nicknames (~210 bytes total) stored in Firestore **reduced account creation rent by over 20%**.",
              highlight: "**In this project, I demonstrated the ability to roughly estimate transaction costs before project execution and utilized appropriate centralized databases to solve excessive cost issues.**"
            }
          ]
        }
      },
      {
        name: "Medium Technical Blog",
        description: "Technical Writing & Knowledge Sharing",
        status: "Ongoing",
        technologies: ["Rust", "Javascript", "Algorithms"],
        highlights: [
          "Authored articles on JavaScript and Rust, explaining foundations through clear, example-driven writing.",
          "Passionate about sharing insights and validating my learning through writing."
        ],
        link: "https://medium.com/@king0209king0209",
        detailedContent: {
          paragraphs: [
            "In the process of learning new knowledge, I enjoy documenting what I've learned through writing. Through written expression, **I can clarify the complete context and re-explain and simplify abstract concepts in my own understanding**.",
            "For example, Express.js was the first server framework I encountered, and I struggled to understand JavaScript's event loop. I referenced many resources and thought about how someone who had never learned programming could understand the event loop. I believe the best approach is to:",
            "1. **Describe relevant events to provide complete context**\n2. **Use examples and visualizations to create scenarios**",
            "At the beginning of the article, I described **'the historical evolution of the JS language'**, **'what happens when you await synchronous events'**, and **2 complex examples** as additional information to aid understanding. I used the following code to step-by-step depict the state of each call stack, macro queue, and micro queue:"
          ],
          codeBlock: `function getData(id) {
  return new Promise((resolve)=>{
    const ans = HTTPREQUEST("xxx/" + id);
    resolve(ans);
  });
}

async function move(id) {
  const result = await getData(id);
  console.log(result);
}

move(20);
console.log("haha");`,
          afterCode: "Throughout this process, I drew out the internal structure and state of the call stack, macro queue, and micro queue step by step to fully describe the entire process. (Below are visualizations of the first three steps)",
          images: [
            { src: "/medium-step1.png", alt: "Event Loop Step 1" },
            { src: "/medium-step2.png", alt: "Event Loop Step 2" },
            { src: "/medium-step3.png", alt: "Event Loop Step 3" }
          ],
          conclusion: "**Through this kind of writing, I can gain a deeper understanding of how programming languages work at a lower level, and also share with others who encounter similar difficulties.**"
        }
      },
      {
        name: "Wordspicker",
        description: "English Vocabulary Learning Game",
        technologies: ["Javascript", "Socket.io", "JWT", "Google Auth", "AWS EC2", "RDS", "Docker"],
        highlights: [
          "Solved English vocabulary learning challenges through a practice-driven project approach, addressing 'repeatedly forgetting unfamiliar words' and 'boredom of solo learning'.",
          "Implemented RESTful + stateless backend design using JWT authentication and Google Auth for quick user login.",
          "Built real-time two-player battle mode using Socket.io to enhance engagement and learning effectiveness."
        ],
        link: "https://github.com/lechipai0209/WordsPicker",
        detailedContent: {
          intro: "This is an English vocabulary learning project designed to help users memorize words. Its key features include **battle mode with others** and **increasing frequency of incorrect words** to aid learning. I personally faced many difficulties in learning English vocabulary, and **'repeatedly forgetting unfamiliar words' and 'boredom of solo learning' are key factors that reduce English learning efficiency. I created this project targeting these two obstacles, solving real-life problems I encountered through actual code implementation**.",
          image: "/wordspicker-architecture.png",
          sections: [
            {
              title: "Game Modes",
              content: [
                "**Practice Mode**: Through a simple algorithm, users repeatedly encounter questions they answered incorrectly in practice mode. Questions that take more attempts to answer correctly yield fewer points, increasing word exposure while maintaining motivation to answer correctly early.",
                "**Battle Mode**: This mode imitates the famous mobile game 'QuizUp', using Socket.io's real-time connection for two-player battles. In each round, faster correct answers earn more points while incorrect answers earn nothing, enhancing game engagement."
              ]
            },
            {
              title: "Technical Features",
              content: [
                "**Automated Deployment**: This project uses GitHub Actions. After each code pull, the program automatically deploys to the EC2 host, saving over 30 minutes per deployment.",
                "**Server State**: This project adopts RESTful + stateless server configuration. The server doesn't need to separately record user state information, only needing JWT tokens to identify users logged in through Google Auth.",
                "**AWS Deployment**: Implemented frontend/backend interfaces and backend server in JavaScript, packaged services with Docker and deployed to AWS EC2 and RDS."
              ]
            }
          ]
        }
      }
    ],
    zh: [
      {
        name: "Chain-Split",
        description: "鏈上分帳專案",
        status: "進行中",
        technologies: ["Rust", "Solana", "Javascript", "Firebase", "React Native", "NoSQL", "Claude code"],
        highlights: [
          "使用 Claude code 輔助編碼，減少 70% 開發時間，提升程式碼可讀性",
          "設計並實作 Anchor 智能合約以實現多簽證機制，並主動探索與應用新興技術以提升系統創新性",
          "在鏈上儲存與集中式儲存之間進行取捨，在花費與安全性之間取得平衡，判斷最佳化的高階架構設計方案"
        ],
        link: "https://github.com/lechipai0209/Chain-Split",
        detailedContent: {
          intro: "這是一個透過區塊鏈技術分帳的軟體系統。相比於傳統分帳軟體，區塊鏈記帳可以明確記錄記帳證明資訊，並可以在鏈上直接進行轉付帳款。我在這個專案中一邊學習 Rust 來撰寫智能合約，也首次嘗試使用 Firebase 來做為後端服務、以及 Claude code 來幫我生成 React Native 的前端粗略畫面。智能合約初步原型已部署至 devnet：EYR8PHamGh1S1PM7d7txEDzyqfGfnchMbQ6tNHMBBsfX",
          architectureImage: "/chain-split.drawio.png",
          challenges: [
            {
              title: "模擬多簽證模式",
              problem: "Anchor 框架本身不支援多人簽章協議，所以無法在沒有硬體支持的情況下進行多簽章。而在分帳的邏輯上面，當支付者為其他人先支付費用時，建立一筆花費記帳時需要所有債務人確認，否則任何人可以隨意的捏造為他人付錢的情況。這需要用到類似多簽證的功能。",
              problemImages: [
                { src: "/chain-split-multisig.png", alt: "多簽證流程圖" }
              ],
              solution: "無法透過硬體設備進行真正的多簽證，但是透過智能合約框架 Anchor 的 account model 特性來執行多簽證的邏輯：每一個 request 都會先對發起 request 的人進行身分驗證確認其擁有對應的私鑰。當支付者要將這筆支付紀錄計入正式紀錄時需要進行以下檢查：",
              checks: [
                "payer（發起這個 request 的人）是否為這筆交易的支付人",
                "債務人透過其他 request 對帳戶變數進行修改，全數同意這筆支出",
                "未納入正式交易紀錄的支出才能進行確認"
              ],
              solutionImages: [
                { src: "/chain-split-code1.png", alt: "多簽證實作程式碼" }
              ],
              result: "因為不管是支付者要對支出進行確認、債務人要同意支付，**Anchor 框架皆可以確認為持有私鑰本人，而達到安全的模擬多簽**。",
              highlight: "**智能合約框架本身無法執行我理想中的功能，但是我仍然可以想出替代的方案以做到最終想要達成的效果。**"
            },
            {
              title: "交易成本過高",
              problem: "將資料長期存放在鏈上需要花費大量的租金，使得小金額的轉帳紀錄成本過高，所需要支付的租金遠比交易本身的金額還要更高。",
              solution: "搭配集中式資料庫 Firebase Firestore，將低機密性文件、非必要之文件存在 Firestore 中。舉例來說：每個群組、用戶的中文名稱以及每一筆交易的名目，中文字每個字元佔有 3 bytes，為英文的三倍。",
              solutionImages: [
                { src: "/chain-split-code2.png", alt: "成本優化程式碼" }
              ],
              result: "上限 20 人的 group 帳戶鏈上僅存放主要資訊約 760 bytes，花費約 0.00618 SOL。帳戶中文名稱、20 名成員之中文暱稱總共約 210 bytes 存放於 Firestore，**幫助創建需花費之帳戶租金下降 20% 以上**。",
              highlight: "**在這個專案中，我展現專案執行前粗略估算轉帳成本的能力、並利用適當的集中式資料庫輔助來解決成本過高的問題。**"
            }
          ]
        }
      },
      {
        name: "Medium 技術部落格",
        description: "技術寫作與知識分享",
        status: "進行中",
        technologies: ["Rust", "Javascript", "演算法"],
        highlights: [
          "撰寫 JavaScript、 Rust和演算法相關文章，透過清晰的範例說明基礎概念",
          "熱衷於分享見解，並透過寫作驗證學習成果"
        ],
        link: "https://medium.com/@king0209king0209",
        detailedContent: {
          paragraphs: [
            "在學習新知識的過程中，我喜歡一邊寫作的方式把學過的知識記錄下來。透過文字書寫，**我可以釐清完整的脈絡，並且用我理解的方式重新解釋、簡化抽象概念**。",
            "舉例來說，express.js 是我第一個接觸到的server框架，非常不理解 javascript的event loop。我參考許多資料，並思考如果是從來沒學過程式語言的人要如何理解event loop。我認為最佳的方式就是",
            "1. **描述相關事件來提供完整脈絡**\n2. **以例子和視圖來帶入情境**",
            "我在文前先描述了**「js語言的歷史沿革」**、**「對同步事件做await會發生甚麼事」**以及 **2個複雜的例子**作為幫助理解的額外資訊，並以以下程式碼來逐步描繪每個call stack、macro queue、micro queue的狀態:"
          ],
          codeBlock: `function getData(id) {
  return new Promise((resolve)=>{
    const ans = HTTPREQUEST("xxx/" + id);
    resolve(ans);
  });
}

async function move(id) {
  const result = await getData(id);
  console.log(result);
}

move(20);
console.log("haha");`,
          afterCode: "而整個過程中，我一步一步畫出call stack、macro queue、micro queue的內部結構和狀態來完整形容整個過程。(以下為前三個步驟的視圖)",
          images: [
            { src: "/medium-step1.png", alt: "Event Loop 步驟 1" },
            { src: "/medium-step2.png", alt: "Event Loop 步驟 2" },
            { src: "/medium-step3.png", alt: "Event Loop 步驟 3" }
          ],
          conclusion: "**透過這樣的書寫，能夠讓自己更深度的理解程式語言底層的運作方式、也可以分享給其他遇到相同困難的人。**"
        }
      },
      {
        name: "Wordspicker",
        description: "單字學習遊戲專案",
        technologies: ["Javascript", "Socket.io", "JWT", "Google Auth", "AWS EC2", "RDS", "Docker"],
        highlights: [
          "以程式專案克服英文單字學習困難，解決「反覆忘記不熟的單字」與「獨自學習的無聊乏味」問題",
          "透過 JWT 身分驗證實現後端 RESTful + stateless 設計，並使用 Google Auth 讓使用者快速登入",
          "使用 Socket.io 實作兩人同步對戰模式，增加遊戲趣味性與可玩性，幫助使用者在趣味中學習"
        ],
        link: "https://github.com/lechipai0209/WordsPicker",
        detailedContent: {
          intro: "這是一個幫助使用者學習背誦英文單字的專案，特點在於透過與他人對戰以及提高錯誤單字頻率來幫助使用者學習。我本身在英文單字學習上遇到了許多困難，**「反覆忘記不熟的單字」、「獨自學習的無聊乏味」是讓英語學習效率變差的一個關鍵要素。我針對這兩項障礙製作了這個專案，透過實際撰寫程式碼解決實際生活中自己碰到的問題**。",
          image: "/wordspicker-architecture.png",
          sections: [
            {
              title: "遊戲模式概述",
              content: [
                "**練習模式**：透過簡單的演算法，使用者在練習模式中反覆回答錯誤的問題，而花費越多次才答對的題目獲得的分數也就越少，讓使用者增加觀看到單字的次數但是同時也保持盡早答對的動力。",
                "**對戰模式**：這個模式模仿知名手遊「知識王」，透過 Socket.io 提供的即時連線來讓兩人對戰。每一回合中越快答對者得到越多分數、答錯者無法獲得分數，藉此來提升遊戲的趣味性。"
              ]
            },
            {
              title: "專案技術特色",
              content: [
                "**自動化部屬**：在這個專案我採用了 Github Action，在每一次 pull code 之後，程式可以自行的部屬至 EC2 的主機上，每次佈署程式節省半小時以上的時間花費。",
                "**伺服器狀態**：本專案採用 RESTful + stateless 的伺服器設定，伺服器不需要另外記錄使用者的狀態資訊，僅需要透過 JWT token 來辨識透過 Google Auth 登入者的身分。",
                "**AWS相關佈署**：以 JavaScript 實現前後端介面與後端伺服器的編寫，並以 Docker 包裝服務佈署至 AWS EC2 以及 RDS。"
              ]
            }
          ]
        }
      }
    ]
  },

  education: {
    en: {
      university: "National Yang Ming Chiao Tung University",
      degree: "BS, Information Management and Finance",
      period: "Sep 2019 - Sep 2023",
      gpa: "3.9/4.3",
      awards: "Academic Reward × 1",
      english: "TOEFL 95 (R23, L25, S24, W23)",
      researchTitle: "Research Experience",
      research: [
        {
          title: "Research Assistant (One Year)",
          lab: "Explainable AI Lab",
          link: "https://doi.org/10.1016/j.irfa.2023.103005",
          description: "Published research in IRFA",
          detailedContent: {
            intro: "This is an explainable AI model research for financial analysis, aimed at solving the dilemma that traditional LLM models have too many parameters and cannot meet most current financial regulations through an architectural-level approach. The main architecture is as shown on the right:",
            steps: [
              "Use clustering algorithms to perform unsupervised clustering on the data level",
              "Use rescaling methods to filter or amplify useful feature values",
              "Perform regression with explainable linear models"
            ],
            result: "Through this architecture, under the AUC (area under curve) metric, performance approaching traditional LLM algorithms like XGBoost can be achieved, while significantly reducing test dataset overfitting by approximately 15%.",
            image: "/explainableAI.png",
            workSection: {
              title: "What did I do?",
              intro: "In this project, I was primarily responsible for code implementation and algorithm result validation.",
              items: [
                "I took over the original code and spent about 2 weeks **modularizing and refactoring 2000 lines of Python code**, adding documentation to improve the readability of the original code.",
                "On the original foundation, I discussed different clustering algorithms (replacing k-means with DBSCAN) or rescaling methods (replacing PCA dimensionality reduction with partition) with the professor, **repeatedly testing, iterating, and discussing improvements with weekly meetings**.",
                "With each iteration, I learned new knowledge through a **learning-by-doing** approach"
              ],
              finalResult: "The research was ultimately accepted and published by IRFA."
            }
          }
        },
        {
          title: "Algorithm Research Project (One Year)",
          topic: "Multiarm Slot Machine",
          link: "https://reurl.cc/YEb0RD",
          description: "Independent research on reinforcement learning algorithms",
          detailedContent: {
            intro: "This project focuses on the **multi-armed bandit problem in dynamic and multi-player environments**.",
            mainResearch: "The main research examines how algorithms can make optimal choices based on limited information when the reward distribution of each choice varies over time, aiming to minimize **regret (loss gap)**.",
            implementation: "The project implements two algorithms in Python:",
            algorithms: [
              "**Return-UCB-V**: A strategy based on exploration and exploitation, which can only see the results of its own choices.",
              "**Full-Information GD**: Can see all choice results and utilizes gradient descent, proven to achieve regret convergence."
            ],
            extension: "Finally, we extended the original 'single-player dynamic environment assumption' to a **multi-player game model**. Simulation results show that Full-Information GD can still maintain average regret convergence under multi-player competition. **The project research received an A+ grade**.",
            workTitle: "What did I do?",
            workItems: [
              "Served as team leader in the project, responsible for planning research progress and allocating research content. **Led team members to complete 3 required readings ahead of schedule during summer vacation**",
              "Worked as a short-term research assistant for the project professor during summer vacation, **responsible for introducing and presenting 5 project-related papers**, and discussing literature content and research plans with the professor.",
              "Simulated and analyzed multi-player algorithm scenarios in Python. **Worked with team members to implement an algorithm similar to Return-UCB-V, achieving similarly low selection costs in situations where only self-choice results are visible**."
            ]
          }
        }
      ]
    },
    zh: {
      university: "國立陽明交通大學",
      degree: "資訊管理與財務金融學系 學士",
      period: "2019年9月 - 2023年9月",
      gpa: "3.9/4.3",
      awards: "書券獎 × 1",
      english: "托福 95 分 (閱讀23, 聽力25, 口說24, 寫作23)",
      researchTitle: "研究經驗",
      research: [
        {
          title: "研究助理（一年）",
          lab: "可解釋人工智慧實驗室",
          link: "https://doi.org/10.1016/j.irfa.2023.103005",
          description: "於 IRFA 發表研究",
          detailedContent: {
            intro: "這是一個可解釋AI模型的金融分析研究，用意在於以架構層級的方法解決傳統LLM模型參數過多無法符合現行多數金融法規的窘境。主要架構如右：",
            steps: [
              "透過分群演算法(Cluster algorithm) 對數據級進行無標籤的分群",
              "透過rescaling方法將有用的特徵值篩選或放大",
              "已可解釋的線型模型進行回歸"
            ],
            result: "透過這樣的架構，在AUC(area under curve)的衡量標準下，可以達到接近傳統LLM演算法如XGboost的程度，且可以大幅降低15%左右測試資料集overfitting 的程度。",
            image: "/explainableAI.png",
            workTitle: "我做了甚麼?",
            workIntro: "在這個專案中，我主要負責程式碼實線與演算法結果驗證。",
            workItems: [
              "我接手原始程式碼，花費約2週的時間對**2000行python程式碼進行模組化的重構**，並標註說明文使得原始程式碼的可讀性變高。",
              "在原始基礎上與教授討論不同的分群演算法(以DBSCAN替換k-means)或是rescaling(以partition替換PCA降維投影)方法，**並以每週meeting的節奏反覆試錯、疊代、討論改進**。",
              "在每一次的改動中，以**邊做邊學**的方式學習新知識"
            ],
            finalResult: "該研究最終受到 IRFA 的接受與發表。"
          }
        },
        {
          title: "演算法研究專案（一年）",
          topic: "多臂老虎機問題",
          link: "https://reurl.cc/YEb0RD",
          description: "強化學習演算法的獨立研究",
          detailedContent: {
            intro: "這個專題是關於「多臂老虎機（multi-armed bandit）」問題在**動態與多人環境下的實踐與延伸**。",
            mainResearch: "主要研究如何在每個選擇的報酬分布會隨時間變化的情況下，讓演算法根據有限資訊做出最好的選擇，以最小化 **regret（損失差距）**。",
            implementation: "專案以 Python 實作兩個演算法：",
            algorithms: [
              "**Return-UCB-V**：基於探索與利用的策略，僅能看到自身選擇的結果。",
              "**Full-Information GD**：能看到所有選擇結果並利用梯度下降，證明能達到 regret 收斂。"
            ],
            extension: "最後，我們將原本的「單人動態環境假設」拓展為**多人賽局模型**，模擬結果顯示 Full-Information GD 在多人競爭下仍能保持平均 regret 收斂。**專題研究成果獲得A+**。",
            workTitle: "我做了甚麼?",
            workItems: [
              "在專題中擔任隊長，負責規劃研究進度與分配研究內容，利用暑假期間**帶領組員超前完成3篇專題指定閱讀**",
              "暑假期間擔任短期專題教授研究助理，**負責5篇專題相關文獻導讀與報告**，並與教授討論文獻內容與研究計畫。",
              "以python 模擬分析多人演算法情境，**與組員一起實作出類似Return-UCB-V的演算法，在僅能看到自身選擇的結果的情況下，可得到相同低的選擇成本**。"
            ]
          }
        }
      ]
    }
  },

  footer: {
    en: {
      copyright: "© 2025 Pai Le-Chi",
      builtWith: "Built with React + Vite",
      quickLinks: "Quick Links",
      contact: "Contact",
      links: {
        github: "GitHub",
        email: "Email",
        linkedin: "LinkedIn"
      },
      sections: {
        work: "Work Experience",
        projects: "Side Projects",
        education: "Education"
      }
    },
    zh: {
      copyright: "© 2025 白樂祺",
      builtWith: "React + Vite",
      quickLinks: "快速連結",
      contact: "聯絡方式",
      links: {
        github: "GitHub",
        email: "電子郵件",
        linkedin: "LinkedIn"
      },
      sections: {
        work: "工作經驗",
        projects: "個人專案",
        education: "教育背景"
      }
    }
  },

  buttons: {
    en: {
      viewBlog: "View Blog",
      viewPublication: "View Publication",
      systemArchitecture: "System Architecture",
      workflow: "Workflow Diagram",
      monitoring: "API Monitoring",
      lineIntegration: "LINE Integration",
      databaseSchema: "Database Schema",
      searchSystem: "Search System"
    },
    zh: {
      viewBlog: "查看部落格",
      viewPublication: "查看論文",
      systemArchitecture: "系統架構",
      workflow: "工作流程圖",
      monitoring: "API 監控",
      lineIntegration: "LINE 整合",
      databaseSchema: "資料庫架構",
      searchSystem: "搜尋系統"
    }
  }
}
