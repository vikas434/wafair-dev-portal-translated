export default {
  siteTitle: "Wayfair 开发者门户",
  welcome: {
    title: "欢迎使用Wayfair API开发者门户",
    description: "我们的目标是通过API促进您的成功接入，尽可能顺畅地覆盖订单管理、库存、运输和其他支持的工作流程。",
    subDescription: "虽然这个过程大部分是自助服务，让您能够自主导航接入过程，但Wayfair随时准备在需要时提供帮助。您可以访问教育文档页面来解决任何问题，我们鼓励您更新API工单以提出任何未解答的问题。"
  },
  suppliers: {
    current: {
      title: "Wayfair现有供应商",
      description: "如果您是活跃的Wayfair供应商，有意集成Wayfair的API，请在此提交工单。从下拉菜单中，选择库存和EDI/API连接 > 帮助设置任何EDI/API连接（库存、订单、ASN、取消等），然后选择API集成选项。即使您的初始API集成不是针对库存，也请做出这些选择。"
    },
    prospective: {
      title: "希望在Wayfair上销售的供应商",
      description: "如果您目前不是Wayfair供应商，想要成为供应商，请访问我们的\"在Wayfair上销\"页面。在那里，您将找到成为Wayfair供应商所需的必要信息。"
    }
  },
  auth: {
    description: "Wayfair的API使用OAuth客户端凭据授权在非交互式配置文件中处理身份验证和授权。大多数API功能都可以通过GraphQL查询和变更来访问。"
  },
  integration: {
    title: "集成指南",
    description: "为了指导您完成集成过程，请查看以下文章：",
    note: "仔细阅读这些页面很重要，这样我们才能加快您的集成并尽快让您上线。"
  },
  links: {
    submitTicket: "提交工单",
    sellOnWayfair: "在Wayfair上销售",
    apiDocs: "API文档"
  },
  steps: {
    benefits: "API及其优势",
    createApp: "创建应用",
    auth: "身份验证",
    testing: "API测试"
  },
  language: {
    select: "选择语言",
    en: "English",
    zh: "中文",
    de: "Deutsch"
  },
  apiBenefits: {
    title: "API及其优势",
    overview: {
      title: "概述",
      description: "API（应用程序编程接口）是在系统之间传输或共享数据的定义方法。简单来说，它实现了两个系统之间的直接通信。",
      examples: {
        title: "API使用的常见示例",
        example1: "自动将条目添加到用户Google日历的会议安排用。",
        example2: "从weather.com获取并显示当前温度的小部件。",
        example3: "在\"联系我们\"页面上集成动态地图功能的网站。"
      }
    },
    benefits: {
      title: "优势",
      speed: {
        title: "速度",
        description: "API连接比EDI更快，因为连接是直接的，无需系统之间的VAN或FTP。"
      },
      flexibility: {
        title: "灵活性和安全性",
        description: "与传统EDI方法相比，API更灵活、更安全、更可定制。"
      },
      cost: {
        title: "成本效益",
        description: "API没有行项目或文档的交易成本，从而降低了总体拥有成本。"
      },
      compatibility: {
        title: "兼容性",
        description: "Wayfair的API端点可以集成到所有主要编程语言中，包括cURL、C#、Ruby、Python、JavaScript、PHP和Java。"
      },
      customization: {
        title: "定制化",
        description: "API允许根据Wayfair特定的最佳实践进行定制，而不依赖于外部确定的标准或限制。"
      },
      availability: {
        title: "可用性",
        description: "使用API，信息始终可用，数据传输可以按固定间隔设置。"
      },
      realtime: {
        title: "近时信息",
        description: "供应商和Wayfair之间的数据传输通过API频繁进行，实现近实时的信息可用性，减少缺货延期交货。"
      },
      integration: {
        title: "集成",
        description: "API实现供应商WMS与Wayfair系统之间的完全集成，无需手动输入进行库存管理。"
      }
    }
  },
  createSandbox: {
    title: "在应用管理中创建应用",
    introduction: "与Wayfair API集成的第一步是创建与API端点交互的应用。为此，您必须拥有在Partner Home中具有API访问角色的用户。",
    steps: {
      access: {
        title: "API访问角色",
        content: "确保您的用户在Partner Home中具有API访问角色"
      },
      environment: {
        title: "选择环境",
        content: "在入职期间创建沙盒和生产应用"
      },
      testData: {
        title: "测试数据",
        content: "沙盒环境将填充测试订单"
      },
      credentials: {
        title: "安全凭证",
        content: "在创建后安全存储您的客户端ID和密钥"
      }
    },
    endpoints: {
      title: "API端点",
      sandbox: {
        name: "沙盒环境",
        url: "https://sandbox.api.wayfair.com/",
        description: "用于测试和开发"
      },
      production: {
        name: "生产环境",
        url: "https://api.wayfair.com/",
        description: "测试完成后用于实时数据"
      }
    },
    sandboxCreation: {
      title: "创建沙盒应用",
      steps: [
        "导航到Partner Home中的应用管理",
        "点击'新建应用'按钮",
        "确保选择了'沙盒'环境",
        "输入应用名称和描述",
        "保存并安全存储客户端ID和密钥"
      ]
    },
    productionCreation: {
      title: "创建生产应用",
      steps: [
        "导航到Partner Home中的应用管理",
        "点击'新建应用'按钮",
        "切换到'生产'环境",
        "输入应用名称和描述",
        "保存并安全存储客户端ID和密钥"
      ]
    },
    credentials: {
      title: "客户端ID和密钥管理",
      description: "您的客户端ID和密钥对于API认证至关重要。它们只会在创建时显示一次。",
      warning: "如果您丢失了客户端密钥，可以通过点击'编辑应用'并选择'旋转密钥'来生成新的密钥。"
    }
  },
  authentication: {
    title: "身份验证",
    overview: {
      title: "概述",
      description: "除了创建初始应用程序外，身份验证也是API入职过程的重要组成部分。身份验证是通过OAuth客户端凭据工作流执行的。您将您的客户端ID和密钥POST到牌检索端点以获取新的访问令牌。此经过身份验证的令牌必须包含在所有未来的API调用中。"
    },
    tokenExpiration: {
      title: "令牌过期",
      description: "令牌的过期时间为12小时，因此请检查令牌中的exp字段以获取以秒为单位的过期日期/时间，以查看何时需要通过获取新令牌重新进行身份验证。",
      recommendation: "建议您在当前时间和过期时间之间保持缓冲。例如，每6小时获取一次令牌可以在发生故障时为您提供一些获取新令牌的余地。"
    },
    clientCredentials: {
      title: "客户端凭据",
      description: "如果您遵循了创建应用程序页面，您将已经注册了一个应用程序，该应用程序将为您分配一个客户端ID和密钥。您将客户端ID和密钥值传递给令牌端点。"
    },
    tokenResponse: {
      title: "令牌响应",
      description: "令牌响应将包括：",
      fields: {
        accessToken: "访问令牌 (access_token)",
        expiresIn: "以秒为单位的过期长度 (expires_in)",
        scope: "当前分配给令牌的范围 (scope)",
        tokenType: "令牌类型 (token_type)"
      },
      usage: "在向API发出请求时，您需要将HTTP授权头设置为来自令牌响应的{token_type} {access_token}。",
      example: "这将类似于：Authorization: Bearer eyJ0eXAiOiJKV1Qi...X1rNJFNVGBwmFQ5tepKwno7DEIjDg"
    },
    audienceUrls: {
      title: "受众URL",
      note: "请注意，受众URL在沙盒和生产应用程序中有所不同。",
      sandbox: "沙盒应用程序应使用 https://sandbox.api.wayfair.com/",
      production: "生产应用程序应使用 https://api.wayfair.com/"
    }
  },
  apiTesting: {
    title: "API测试",
    introduction: {
      title: "测试入门",
      description: "现在您已经拥有了沙盒应用、客户端ID/密钥和用于身份验证的令牌，是时候开始测试了。在Wayfair的生产环境中验证您的帐户之前，您需要证明您能够在我们的沙盒环境中准确可靠地执行工作流程。您需要的所有工具都位于开发者工具部分。"
    },
    endpoints: {
      title: "API端点",
      sandbox: {
        title: "沙盒端点",
        description: "使用沙盒应用程序（用于测试）时，查询的端点应为：",
        url: "https://sandbox.api.wayfair.com/v1/graphql"
      },
      production: {
        title: "生产端点",
        description: "对于生产应用程序：",
        url: "https://api.wayfair.com/v1/graphql"
      },
      note: "您可以在应用管理页面上查看这些端点。"
    },
    workflow: {
      title: "工作流程测试",
      note: "请在每个工作流程结束时更新您的API工单，以便他们可以验证集成成功和数据准确性。",
      production: "一旦所有工作流程都经过测试，您将切换到生产应用程序以影响实时数据。"
    }
  },
  applicationManagement: {
    title: "应用管理",
    overview: {
      description: "应用管理工具用于创建应用程序，您可以使用这些应用程序向API端点发送请求并接收响应。要创建应用程序，请点击“新建应用程序”按钮。"
    },
    steps: {
      sandbox: {
        title: "创建沙盒应用程序",
        description: "要开始测试API集成，需要创建一个沙盒应程序。导航到应用管理页面并点击“新建应用程序”按钮。"
      },
      production: {
        title: "创建生产应用程序",
        description: "创建沙盒应用程序后，创建生产应用程序。测试完成后，您将切换到此应用程序以发送请求到api.wayfair.com。"
      },
      credentials: {
        title: "管理客户端凭据",
        description: "在创建应用程序时，您将收到用于身份验证的客户端ID和客户端密钥。请妥善保存这些信息，因为它们只会显示一次。"
      }
    },
    creation: {
      title: "创建应用程序",
      steps: {
        newApp: {
          icon: "Plus",
          text: "点击“新建应用程序”开始"
        },
        environment: {
          icon: "ToggleLeft",
          text: "选择环境（沙盒/生产）"
        },
        details: {
          icon: "Save",
          text: "输入应用程序名称和描述"
        }
      }
    },
    credentials: {
      title: "客户端ID和客户端密钥",
      description: "一旦创建了应用程序，将会弹出一个新窗口，显示用于身份验证的客户端ID和客户端密钥。这是您唯一一次可以看到客户端ID和密钥的机会，请复制并妥善保存。",
      warning: "如果您丢失了客户端密钥，可以通过点击“编辑应用程序”按钮，然后使用“旋转密钥”按钮生成一个新的密钥。"
    }
  },
  graphql: {
    title: "GraphQL",
    introduction: {
      description: "GraphQL是一种API查询语言。它允许客户端仅请求所需的数据。您可以在graphql.org找到GraphQL的入门介绍。GraphQL请求仍然通过HTTP POST进行，POST主体中始终包含查询，并且可能还包含变量。",
      endpoint: "如果您指向GraphQL端点，您需要在用于连接Wayfair的URL中添加v1/graphql/。"
    },
    types: {
      note: "请注意，由于GraphQL的类型系统，并非所有类型都会包含在这些文档中。您应该访问GraphiQL以进一步探索模式。"
    },
    why: {
      title: "为什么选择GraphQL",
      description: "我们使用GraphQL是因为它让您可以决定从API中获取哪些信息。GraphQL巧妙地解决了过度获取和获取不足的问题。您告诉服务器您想要什么数据，您只会得到您想要的数据。"
    }
  },
  graphiql: {
    title: "GraphiQL 概览",
    overview: "GraphiQL 是一个集成开发环境（IDE）。IDE 是开发人员用于编写和运行特定编程语言代码的工具。GraphiQL 的工作方式相同，但使用 GraphQL 语言。",
    access: "您可以通过合作伙伴主页访问 GraphiQL，或使用提供的链接直接导航。",
    sections: {
      appSelection: {
        title: "应用程序选择",
        content: "选择您的应用程序和环境（沙盒/生产）以开始测试。查看您的令牌范围并使用 Voyager 探索 API 架构。"
      },
      exampleGen: {
        title: "示例生成",
        content: "生成示例查询和变更，访问文档，并查看多种编程语言的代码示例。"
      },
      ide: {
        title: "IDE 环境",
        content: "在同一位置编辑和测试查询/变更，格式化代码，并查看您的查询历史记录。"
      }
    },
    codeGen: {
      title: "代码生成",
      steps: [
        "在示例生成窗口中点击'显示代码'按钮",
        "从下拉菜单中选择您偏好的编程语言",
        "复制或下载生成的代码片段",
        "在您的应用程序中使用代码"
      ]
    },
    history: {
      title: "查询历史",
      description: "访问并重新运行您之前执行的查询和变更。"
    },
    docExplorer: {
      title: "文档浏览器",
      description: "使用内置文档浏览器探索可用的查询、变更、字段及其类型。",
      steps: [
        "点击'文档'按钮打文档浏览器",
        "浏览字段和类型",
        "点击橙色字段以探索子字段",
        "查看每个字段和类型的详细信息"
      ]
    }
  },
  postman: {
    title: "使用 Postman",
    http: {
      title: "HTTP 请求",
      description: "HTTP 代表超文本传输协议，是服务器和客户端通过“请求”在互联网上交换数据的一种方式。HTTP 请求有不同的类型，结构不同，包含的信息也不同。",
      get: {
        title: "HTTP GET 请求",
        description: "HTTP GET 请求纯粹用于客户端从服务器检索数据。这种类型的请求无法更改数据，也不包含请求正文。相反，GET 请求使用“查询参数”来指定服务器要返回的数据。"
      },
      post: {
        title: "HTTP POST 请求",
        description: "HTTP POST 请求与 GET 请求不同，因为它通常包含用于更新或创建服务器上数据的数据。POST 请求通常包含称为请求正文的数据，而不是使用查询参数将数据从客户端传递到服务器。"
      }
    },
    intro: {
      title: "Postman",
      description: "Postman 是一个方便的工具，用于通过创建和发送 HTTP 请求与 API 交互。Postman 为用户提供了一个直观的界面，易于导航和构建 API 请求。",
      features: [
        "创建和保存 API 请求集合",
        "无需编写代码即可测试 API 端点",
        "生成多种编程语言的代码片段",
        "查看请求历史和响应数据",
        "设置环境变量和身份验证"
      ]
    },
    auth: {
      title: "身份验证",
      description: "Wayfair 的主要身份验证形式是通过 O-Auth 客户端凭据工作流。要在 Wayfair 进行身份验证，您只需要一个有效的“客户端 ID”和“客户端密钥”。",
      steps: [
        "将请求类型设置为 POST",
        "将请求 URL 设置为 https://sso.auth.wayfair.com/oauth/token",
        "使用您的客户端凭据创建请求正文",
        "发送请求并检索访问令牌"
      ]
    },
    integration: {
      title: "API 集成",
      description: "一旦您从身份验证工作流中获得令牌，您现在可以向 Wayfair 的 API 发出请求。",
      steps: [
        "使用身份验证令牌设置请求头",
        "选择适当的 HTTP 方法（GET/POST）",
        "根据需要配置请求参数或正文",
        "发送请求并处理响应"
      ]
    },
    collections: {
      title: "创建集合",
      description: "在 Postman 中，您可以创建一个保存的请求集合，这样您就不必一遍又一遍地重新创建相同的请求。",
      steps: [
        "打开侧边栏中的集合选项卡",
        "点击“+ 新建集合”按钮",
        "命名您的集合并添加描述",
        "开始向您的集合中添加请求"
      ]
    },
    history: {
      title: "请求历史",
      description: "Postman 保存了所有发送请求的日志，允许您查看和用以前的请求。",
      steps: [
        "打开侧边栏中的历史记录选项卡",
        "浏览您的以前请求",
        "点击任何请求以查看其详细信息",
        "根据需要重用或修改以前的��求"
      ]
    },
    codeGen: {
      title: "代码生成",
      description: "Postman 可以为您的请求生成多种编程语言的代码片段。",
      steps: [
        "在 Postman 中创建和配置您的请求",
        "点击请求 URL 下方的“代码”按钮",
        "选择您偏好的编程语言",
        "复制生成的代码片段"
      ]
    }
  },
  integrationStatus: {
    title: "API集成状态",
    introduction: {
      title: "介绍",
      description: "成功发送符合Wayfair测试标准的API调用的供应商可以通过供应商集成状态页面自行授予某些API的生产权限。"
    },
    production: {
      title: "如何进入生产",
      steps: [
        "通过下拉菜单选择相应的供应商名称",
        "查找状态为“准备好生产”的API",
        "点击所需API的“查看/更新”",
        "验证正确的应用程序和供应商名称",
        "切换“生产中实时”按钮"
      ],
      note: "您可以通过点击面板顶部的“显示历史”查看沙盒应用程序的状态历史。"
    },
    supportedApis: {
      title: "支持的API",
      description: "目前，供应商可以自助将以下API投入生产：",
      list: [
        "采购订单查询和响应",
        "提前发货通知",
        "注册和运单生成"
      ],
      note: "未来将添加更多。"
    },
    requirements: {
      title: "生产要求",
      prerequisites: [
        "创建了生产应用程序",
        "发送符合测试标准的API调用"
      ],
      criteria: {
        title: "按API的测试标准",
        purchaseOrders: "成功查询并发送采购订单的接受",
        asn: "成功发送ASN",
        shipping: "成功发送注册并检索运单"
      },
      note: "如果您认为已满足测试标准但未看到“准备好生产”状态，请更新您的集成工单以获取帮助。"
    },
    access: {
      note: "如果您不知道为什么没有进入生产的权限，请更新您的集成工单，会有人协助您。"
    },
    disable: {
      description: "如果您在生产中但不再想要，请在供应商集成状态页面找到正确的API。然后点击“查看/更新”并将相应的应用程序切换为“否”。您将看到一条警告消息。点击“禁用生产中的应用程序”。"
    }
  },
  vetting: {
    title: "审核页面",
    description: "审核页面是一个工具，供供应商检查其库存供稿是否已成功被Wayfair接收，并查看采购订单。对于库存，该工具提供了一个比较视图，以评估API测试数据和当前生产数据之间的差异。对于采购订单，它显示了供应商的所有响应，包括接受采购订单和运输变更。",
    usage: {
      title: "使用审核页面",
      selectApp: "选择您想要结果的应用程序，然后在应用程序选择对话框中点击“切换应用程序”按钮以加载结果。",
      tabs: "在应用程序选择下方，您会发现两个选项卡，一个用于“库存”，另一个用于“采购订单”。您应该点击相应的选项卡以查看该特定API的测试结果。如果您有单独的库存和订单管理应用程序，您需要选择相应的应用程序和选项卡。"
    },
    inventory: {
      title: "字段定义 - 库存",
      description: "这些字段提供有关库存供稿和比较的详细信息。",
      fields: {
        supplierId: "供应商ID",
        supplierIdDesc: "分配给每个供应商的唯一ID。",
        apiFeed: "API沙盒供稿",
        apiFeedDesc: "来自API沙盒环境的库存供稿。",
        apiFeedId: "API沙盒供稿 - ID",
        apiFeedIdDesc: "沙盒环境中库存供稿的数据库ID。",
        apiFeedDate: "API沙盒供稿 - 日期",
        apiFeedDateDesc: "接收到API库存供稿的日期。",
        otherFeed: "其他供稿",
        otherFeedDesc: "来自非API平台（如FTP、EDI、Extranet等）的库存供稿。",
        otherFeedId: "其他供稿 - ID",
        otherFeedIdDesc: "沙盒环境中非API库存供稿的数据库ID。",
        otherFeedDate: "其他供稿 - 日期",
        otherFeedDateDesc: "接收到非API库存供稿的日期。",
        avgVariance: "平均数量差异",
        avgVarianceDesc: "API和其他供稿之间的平均数量差异 - 仅适用于匹配的零件。N/A = 供稿之间没有零件匹配。",
        unmatchedParts: "不匹配的零件",
        unmatchedPartsDesc: "在API供稿中找到但在非API库存供稿中缺失的不同零件的总数。",
        distinctParts: "不同零件",
        distinctPartsDesc: "API供稿中不同零件（按零件编号）的总数。"
      }
    },
    po: {
      title: "字段定义 - 采购订单",
      description: "这些字段提供有关采购订单及其状态的信息。",
      fields: {
        poNumber: "采购订单号",
        poNumberDesc: "与采购订单相关的唯一编号",
        supplierId: "供应商ID",
        supplierIdDesc: "用于识别每个供应商的唯一ID",
        date: "日期",
        dateDesc: "创建采购订单的日期"
      }
    },
    context: {
      title: "附加上下文",
      points: [
        "库存数据将仅从发送之日起存储7天。",
        "审核页面仅显示feedKind: TRUE_UP供稿，并忽略所有feedKind: DIFFERENTIAL供稿。",
        "目前，供应商只能通过API发送采购订单的接受响应。BACKORDER/REJECT仍需通过合作伙伴主页进行。"
      ]
    }
  },
  metrics: [
    { vertical: '地毯', preApi: '0.17', postApi: '0.14', reduction: '18%' },
    { vertical: '户外', preApi: '1.86', postApi: '0.25', reduction: '68%' },
    { vertical: '床上用品', preApi: '0.63', postApi: '0.48', reduction: '24%' },
    { vertical: '家具-卧室', preApi: '0.53', postApi: '0.22', reduction: '58%' },
    { vertical: '家具-厨房', preApi: '0.95', postApi: '0.21', reduction: '78%' }
  ]
};