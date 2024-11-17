export default {
  siteTitle: "Wayfair Developer Portal",
  welcome: {
    title: "Welcome to Wayfair's API Developer Portal",
    description: "Our aim is to facilitate your successful onboarding via API, covering order management, inventory, shipping, and other supported workflows as smoothly as possible.",
    subDescription: "Although much of this process is self-service, empowering you to navigate your own onboarding journey, Wayfair will be readily available to offer assistance whenever necessary. You'll have access to educational documentation pages to troubleshoot any issues, and you're encouraged to update your API ticket with any unanswered questions."
  },
  suppliers: {
    current: {
      title: "Suppliers Live on Wayfair",
      description: "If you're an active Wayfair supplier interested in integrating with Wayfair's APIs, please submit a ticket here. From the dropdown menus, choose Inventory and EDI/API connection > Help to Setup any EDI/API Connection (Inventory, Order, ASNs, Cancellation, etc.), and then select the API Integration option. Even if your initial API integration is for something other than Inventory, please make these selections."
    },
    prospective: {
      title: "Suppliers Looking to Sell on Wayfair",
      description: "If you're not currently a Wayfair supplier and would like to become one, please visit our Sell on Wayfair page. There, you'll find the necessary information to get set up as a Wayfair supplier."
    }
  },
  auth: {
    description: "Wayfair's API utilizes the OAuth client credentials grant in a non-interactive profile to handle authentication and authorization. The majority of API functionality is accessible through GraphQL queries and mutations."
  },
  integration: {
    title: "Integration Guide",
    description: "To guide you through the integration process, please review the following articles:",
    note: "It's important to read these pages thoroughly so we can expedite your integration and get you live as soon as possible."
  },
  links: {
    submitTicket: "Submit a Ticket",
    sellOnWayfair: "Sell on Wayfair",
    apiDocs: "API Documentation"
  },
  steps: {
    benefits: "API and Its Benefits",
    createApp: "Create Application",
    auth: "Authentication",
    testing: "API Testing"
  },
  language: {
    select: "Select Language",
    en: "English",
    zh: "中文",
    de: "Deutsch"
  },
  apiBenefits: {
    title: "API and Its Benefits",
    overview: {
      title: "Overview",
      description: "An API, short for Application Programming Interface, is a defined method for transferring or sharing data between systems. In simpler terms, it enables direct communication between two systems.",
      examples: {
        title: "Common Examples of API Usage",
        example1: "A meeting scheduling app that automatically adds entries to a user's Google calendar.",
        example2: "A widget that fetches and displays the current temperature from weather.com.",
        example3: "A website incorporating a dynamic map feature on its \"contact us\" page."
      }
    },
    benefits: {
      title: "Benefits",
      speed: {
        title: "Speed",
        description: "API connections are quicker than EDI because the connection is direct, eliminating the need for VAN or FTP between systems."
      },
      flexibility: {
        title: "Flexibility and Security",
        description: "APIs are more flexible, secure, and customizable compared to traditional EDI methods."
      },
      cost: {
        title: "Cost-effectiveness",
        description: "There are no transactional costs for line items or documents with APIs, resulting in a lower total cost of ownership."
      },
      compatibility: {
        title: "Compatibility",
        description: "Wayfair's API endpoint can be integrated into all major programming languages, including cURL, C#, Ruby, Python, JavaScript, PHP, and Java."
      },
      customization: {
        title: "Customization",
        description: "APIs allow for customization to fit Wayfair-specific best practices, without dependence on externally-determined standards or limitations."
      },
      availability: {
        title: "Availability",
        description: "With APIs, information is always available, and data transfer can be set up at regular intervals."
      },
      realtime: {
        title: "Near real-time Information",
        description: "Data transfer between supplier and Wayfair is frequent with APIs, resulting in nearly real-time information availability and fewer out-of-stock backorders."
      },
      integration: {
        title: "Integration",
        description: "APIs enable full integration between supplier WMS and Wayfair's systems, eliminating the need for manual inputs for inventory management."
      }
    }
  },
  createSandbox: {
    title: "Creating Applications in Application Management",
    introduction: "Your first step to integrating with Wayfair APIs is to create Applications to interact with the API endpoint. To do this, you must have a user that has the API access role in Partner Home.",
    steps: {
      access: {
        title: "API Access Role",
        content: "Ensure your user has the API access role in Partner Home"
      },
      environment: {
        title: "Choose Environment",
        content: "Create both Sandbox and Production applications during onboarding"
      },
      testData: {
        title: "Test Data",
        content: "Sandbox environment will be populated with test purchase orders"
      },
      credentials: {
        title: "Secure Credentials",
        content: "Store your Client ID and Secret safely after creation"
      }
    },
    endpoints: {
      title: "API Endpoints",
      sandbox: {
        name: "Sandbox Environment",
        url: "https://sandbox.api.wayfair.com/",
        description: "Use for testing and development"
      },
      production: {
        name: "Production Environment",
        url: "https://api.wayfair.com/",
        description: "Use for live data after testing is complete"
      }
    },
    sandboxCreation: {
      title: "Creating a Sandbox Application",
      steps: [
        "Navigate to Application Management in Partner Home",
        "Click 'New Application' button",
        "Ensure 'Sandbox' environment is selected",
        "Enter application name and description",
        "Save and securely store the Client ID and Secret"
      ]
    },
    productionCreation: {
      title: "Creating a Production Application",
      steps: [
        "Navigate to Application Management in Partner Home",
        "Click 'New Application' button",
        "Toggle to 'Production' environment",
        "Enter application name and description",
        "Save and securely store the Client ID and Secret"
      ]
    },
    credentials: {
      title: "Client ID and Secret Management",
      description: "Your Client ID and Secret are crucial for API authentication. They will only be shown once upon creation.",
      warning: "If you lose your Client Secret, you can generate a new one by clicking 'Edit Application' and selecting 'Rotate Secret'."
    }
  },
  authentication: {
    title: "Authentication",
    overview: {
      title: "Overview",
      description: "Aside from creating the initial application, authentication is also an important part of the API onboarding process. Authentication is performed using an OAuth client-credentials workflow. You POST your client id and secret to the token retrieval endpoint in order to get a new access token. This authenticated token must be included in all future API calls."
    },
    tokenExpiration: {
      title: "Token Expiration",
      description: "Tokens have an expiration of 12 hours, so check the exp field in the token for the expiration date/time in seconds to see when you will need to re-authenticate by grabbing a new token.",
      recommendation: "It is recommended that you maintain a buffer between the current time and time of expiration. For example, fetching a token every 6 hours would provide you some leeway to get a new token in the event of an outage."
    },
    clientCredentials: {
      title: "Client Credentials",
      description: "If you followed the Create Application page, you will have already registered an application, which will allocate a client id and secret to you. You will pass the client id and secret values to the token endpoint."
    },
    tokenResponse: {
      title: "Token Response",
      description: "The token response will include:",
      fields: {
        accessToken: "access token (access_token)",
        expiresIn: "expiration length in seconds (expires_in)",
        scope: "scopes currently assigned to the token (scope)",
        tokenType: "type of the token (token_type)"
      },
      usage: "When making requests to the API, you will need to set your HTTP Authorization header to {token_type} {access_token} from your token response.",
      example: "This will look something like: Authorization: Bearer eyJ0eXAiOiJKV1Qi...X1rNJFNVGBwmFQ5tepKwno7DEIjDg"
    },
    audienceUrls: {
      title: "Audience URLs",
      note: "Note that the audience URL differs for Sandbox and Production applications.",
      sandbox: "Sandbox applications should use https://sandbox.api.wayfair.com/",
      production: "Production applications should use https://api.wayfair.com/"
    }
  },
  apiTesting: {
    title: "API Testing",
    introduction: {
      title: "Getting Started with Testing",
      description: "Now that you have your Sandbox application, Client ID/Secret, and a token for authentication, it's time to begin testing. You will need to demonstrate you are able to accurately and reliably perform a workflow in our Sandbox environment before your account is verified in Wayfair's Production environment. All of the instruments you will need to accomplish this are located in the Developer Tools section."
    },
    graphiql: {
      title: "Using GraphiQL Explorer",
      description: "If you navigate to the GraphiQL Explorer within the Developer tab and select your Sandbox Application, you will be able to generate examples of all of Wayfair's available queries/mutations, and generate code samples in your programming language of choice.",
      codeGeneration: "By clicking Show Code, and then the Copy button on this page, you will be able to avoid syntax errors and ensure that you run into as few issues as possible during testing.",
      moreInfo: "You can find additional GraphiQL details by going to the sidebar on the left, then Developer Tools, and then clicking on GraphiQL Overview."
    },
    endpoints: {
      title: "API Endpoints",
      sandbox: {
        title: "Sandbox Endpoint",
        description: "When using a Sandbox application (for testing), the endpoint of your queries should be:",
        url: "https://sandbox.api.wayfair.com/v1/graphql"
      },
      production: {
        title: "Production Endpoint",
        description: "For Production Application:",
        url: "https://api.wayfair.com/v1/graphql"
      },
      note: "You can view these endpoints on the Application Management page."
    },
    workflow: {
      title: "Workflow Testing",
      note: "Please update your API ticket at the end of each workflow so they can validate integration success and data accuracy.",
      production: "Once all workflows have been tested, you will switch to the Production application to affect live data."
    }
  },
  applicationManagement: {
    title: "Application Management",
    overview: {
      description: "The Application Management tool is used to create applications with which you can send a request and receive the response from the API endpoint. To create an application click on the \"New Application\" button."
    },
    steps: {
      sandbox: {
        title: "Creating a Sandbox Application",
        description: "To start testing the API integration a Sandbox application needs to be created. Navigate to the application management page and click on the \"New Application\" button."
      },
      production: {
        title: "Creating a Production Application",
        description: "After creating a Sandbox application, create a Production application. You'll switch to this after testing is complete to send requests to api.wayfair.com."
      },
      credentials: {
        title: "Managing Client Credentials",
        description: "Upon application creation, you'll receive a Client ID and Client Secret for authentication. Store these safely as they're shown only once."
      }
    },
    creation: {
      title: "Creating an Application",
      steps: {
        newApp: {
          icon: "Plus",
          text: "Click \"New Application\" to begin"
        },
        environment: {
          icon: "ToggleLeft",
          text: "Select environment (Sandbox/Production)"
        },
        details: {
          icon: "Save",
          text: "Enter application name and description"
        }
      }
    },
    credentials: {
      title: "Client ID and Client Secret",
      description: "Once an application is created, a new pop-up window will show up with the Client ID and Client Secret that is then used to generate the token for authentication. This is the only time you can see the Client ID and Secret, so please copy and store them safely.",
      warning: "If you have lost the Client Secret, you can generate a new one by clicking on the \"Edit Application\" button and then using the \"Rotate Secret\" button."
    }
  },
  graphql: {
    title: "GraphQL",
    introduction: {
      description: "GraphQL is an API query language. It allows the client to ask the server for only the data that it needs. You can find a primer to GraphQL at graphql.org. GraphQL requests still happen via HTTP POST, will always have query as a member of the POST body, and might also have variables as part of the post body.",
      endpoint: "If you are pointing to a GraphQL endpoint, you will need to add v1/graphql/ to the URL you use to connect to Wayfair."
    },
    types: {
      note: "Note that due to GraphQL's type system, not all types will be included in these documents. You should visit GraphiQL for further schema exploration."
    },
    why: {
      title: "Why GraphQL",
      description: "We use GraphQL because it gives power back to you to determine just what information you want from the API. GraphQL neatly solves the problems of over-fetching and under-fetching. You tell the server what data you want, and you only get back the data you wanted."
    }
  },
  graphiql: {
    title: "GraphiQL Overview",
    overview: "GraphiQL is an Integrated Developer Environment (IDE). An IDE is a tool for developers to write and run pieces of code in a specific programming language. GraphiQL works the same, but in the GraphQL language.",
    access: "You can access GraphiQL through Partner Home or navigate directly using the provided link.",
    sections: {
      appSelection: {
        title: "Application Selection",
        content: "Select your application and environment (Sandbox/Production) to begin testing. View your token scopes and explore the API schema using Voyager."
      },
      exampleGen: {
        title: "Example Generation",
        content: "Generate example queries and mutations, access documentation, and view code samples in multiple programming languages."
      },
      ide: {
        title: "IDE Environment",
        content: "Edit and test queries/mutations, format code, and view your query history all in one place."
      }
    },
    codeGen: {
      title: "Code Generation",
      steps: [
        "Click the 'Show Code' button in the Example Generation window",
        "Select your preferred programming language from the dropdown",
        "Copy or download the generated code snippet",
        "Use the code in your application"
      ]
    },
    history: {
      title: "Query History",
      description: "Access and rerun your previously executed queries and mutations."
    },
    docExplorer: {
      title: "Documentation Explorer",
      description: "Explore available queries, mutations, fields, and their types using the built-in documentation browser.",
      steps: [
        "Click the 'Docs' button to open the Documentation Explorer",
        "Navigate through fields and types",
        "Click on orange fields to explore sub-fields",
        "View detailed information about each field and type"
      ]
    }
  },
  postman: {
    title: "Using Postman",
    http: {
      title: "HTTP Requests",
      description: "HTTP stands for Hypertext Transfer Protocol and is a means for servers and clients to exchange data over the internet through \"requests\". There are different types of HTTP requests that are structured differently and contain different information.",
      get: {
        title: "HTTP GET Request",
        description: "The HTTP GET request is purely used for a client to retrieve data from the server. Requests of this type are unable to alter data and do not contain a request body. Instead, GET requests use \"query parameters\" to specify what data the server is to return."
      },
      post: {
        title: "HTTP POST Request",
        description: "The HTTP POST request is different from the GET request as it usually contains data that's used to update or create data on the server. Instead of using query parameters to pass data from the client to the server, POST requests usually contain what's known as a request body."
      }
    },
    intro: {
      title: "Postman",
      description: "Postman is a convenient tool for interacting with APIs by creating and sending HTTP requests. Postman provides the user with an intuitive interface that's easy to navigate and construct API requests.",
      features: [
        "Create and save collections of API requests",
        "Test API endpoints without writing code",
        "Generate code snippets in multiple programming languages",
        "View request history and response data",
        "Set up environment variables and authentication"
      ]
    },
    auth: {
      title: "Authentication",
      description: "Wayfair's primary form of authentication is through the O-Auth client-credentials workflow. All one needs to authenticate with Wayfair is a valid \"Client ID\" and \"Client Secret.\"",
      steps: [
        "Set the request type to POST",
        "Set the request URL to https://sso.auth.wayfair.com/oauth/token",
        "Create the request body with your client credentials",
        "Send the request and retrieve the access token"
      ]
    },
    integration: {
      title: "API Integration",
      description: "Once you have a token from the authentication workflow, you can now make requests to Wayfair's API.",
      steps: [
        "Set up your request headers with the authentication token",
        "Choose the appropriate HTTP method (GET/POST)",
        "Configure request parameters or body as needed",
        "Send the request and handle the response"
      ]
    },
    collections: {
      title: "Creating Collections",
      description: "In Postman, you can create a collection of saved requests so that you don't have to recreate the same request over and over.",
      steps: [
        "Open the Collections tab in the sidebar",
        "Click the '+ New Collection' button",
        "Name your collection and add a description",
        "Start adding requests to your collection"
      ]
    },
    history: {
      title: "Request History",
      description: "Postman saves a log of all requests that are sent, allowing you to review and reuse previous requests.",
      steps: [
        "Open the History tab in the sidebar",
        "Browse through your previous requests",
        "Click on any request to view its details",
        "Reuse or modify previous requests as needed"
      ]
    },
    codeGen: {
      title: "Code Generation",
      description: "Postman can generate code snippets for your requests in various programming languages.",
      steps: [
        "Create and configure your request in Postman",
        "Click the 'Code' button below the request URL",
        "Select your preferred programming language",
        "Copy the generated code snippet"
      ]
    }
  },
  integrationStatus: {
    title: "API Integration Status",
    introduction: {
      title: "Introduction",
      description: "Suppliers who have successfully sent API calls that meet Wayfair's testing criteria can grant themselves permissions to go to production for certain APIs via the Supplier Integration Status page."
    },
    production: {
      title: "How to Get to Production",
      steps: [
        "Select the appropriate supplier name via the dropdown",
        "Look for APIs with 'Ready for Production' status",
        "Click 'View/Update' for the desired API",
        "Verify the correct application and supplier name",
        "Toggle the 'Live in Production' button"
      ],
      note: "You can view the status history of your sandbox application by clicking 'Show History' at the top of the panel."
    },
    supportedApis: {
      title: "Supported APIs",
      description: "Currently, suppliers can self-service going to production for the following APIs:",
      list: [
        "Purchase Order Query and Response",
        "Advance Ship Notifications",
        "Registration and Shipping Label Generation"
      ],
      note: "More will be added in the future."
    },
    requirements: {
      title: "Requirements for Production",
      prerequisites: [
        "Created a production application",
        "Sent API calls meeting testing criteria"
      ],
      criteria: {
        title: "Testing Criteria by API",
        purchaseOrders: "Successfully query and send an acceptance for a Purchase Order",
        asn: "Successfully send an ASN",
        shipping: "Successfully send a registration and retrieve a shipping label"
      },
      note: "If you think you have met the testing criteria but don't see 'Ready for Production' status, please update your integration ticket for assistance."
    },
    access: {
      note: "If you don't know why you don't have access to go to production, please update your integration ticket and someone will assist you."
    },
    disable: {
      description: "If you are in production and no longer want to be, find the correct API on the Supplier Integration Status page. Then click 'View/Update' and toggle the appropriate application to 'No.' You will see a warning message. Click 'Disable Application in Production.'"
    }
  },
  vetting: {
    title: "Vetting Page",
    description: "Vetting Page is a tool for suppliers to check that their inventory feeds have been successfully received by Wayfair and review purchase orders. For inventory, the tool provides a comparison view to assess variance between API test data and current production data. For purchase orders, it shows all the responses from the supplier, including accepting the purchase order and shipping mutations.",
    usage: {
      title: "Using Vetting Page",
      selectApp: "Select the application that you want the results for and click on the \"Switch Application\" button in the Application Select Dialog box to load the results.",
      tabs: "Just below the application select, you will find two tabs one for \"Inventory\" and another one for \"Purchase Orders.\" You should click on the corresponding tabs to look at the test results for that particular API. If you have separate applications for inventory and order management, you need to select the appropriate application and tab."
    },
    inventory: {
      title: "Field Definitions - Inventory",
      description: "These fields provide detailed information about inventory feeds and comparisons.",
      fields: {
        supplierId: "Supplier ID",
        supplierIdDesc: "Unique ID given to each supplier.",
        apiFeed: "API Sandbox Feed",
        apiFeedDesc: "Inventory feed coming from the API Sandbox environment.",
        apiFeedId: "API Sandbox Feed - ID",
        apiFeedIdDesc: "Database id for the inventory feed in the sandbox environment.",
        apiFeedDate: "API Sandbox Feed - Date",
        apiFeedDateDesc: "Date on which the API inventory feed was received.",
        otherFeed: "Other Feed",
        otherFeedDesc: "Inventory feed coming from a Non-API platforms like FTP, EDI, Extranet, etc.",
        otherFeedId: "Other Feed - ID",
        otherFeedIdDesc: "Database id for the Non-API inventory feed in the sandbox environment.",
        otherFeedDate: "Other Feed - Date",
        otherFeedDateDesc: "Date on which the Non-API inventory feed was received.",
        avgVariance: "Average Quantity Variance",
        avgVarianceDesc: "Average difference in quantity between API and Other feed - for matched parts only. N/A = no parts match between feeds.",
        unmatchedParts: "Unmatched Parts",
        unmatchedPartsDesc: "Total count of distinct parts which are found in API feed but missing in the Non-API inventory feed.",
        distinctParts: "Distinct Parts",
        distinctPartsDesc: "Total count of distinct parts (by part number) in the API feed."
      }
    },
    po: {
      title: "Field Definitions - Purchase Orders",
      description: "These fields provide information about purchase orders and their status.",
      fields: {
        poNumber: "Purchase Order Number",
        poNumberDesc: "Unique number tied to a purchase order",
        supplierId: "Supplier ID",
        supplierIdDesc: "Unique ID provided for identifying each supplier",
        date: "Date",
        dateDesc: "Date on which the purchase order was created"
      }
    },
    context: {
      title: "Additional Context",
      points: [
        "The inventory data will only be stored for 7 days from the day they were sent.",
        "The vetting page only displays feedKind: TRUE_UP feeds and ignores all feedKind: DIFFERENTIAL feeds.",
        "Currently the supplier can only send the ACCEPT response for the PO through API. BACKORDER/REJECT still need to be performed through Partner Home."
      ]
    }
  },
  metrics: [
    { vertical: 'Rugs', preApi: '0.17', postApi: '0.14', reduction: '18%' },
    { vertical: 'Outdoor', preApi: '1.86', postApi: '0.25', reduction: '68%' },
    { vertical: 'Bedding', preApi: '0.63', postApi: '0.48', reduction: '24%' },
    { vertical: 'Furniture-Bedroom', preApi: '0.53', postApi: '0.22', reduction: '58%' },
    { vertical: 'Furniture-Kitchen', preApi: '0.95', postApi: '0.21', reduction: '78%' }
  ]
};