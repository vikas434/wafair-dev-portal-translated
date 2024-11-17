export default {
  siteTitle: "Wayfair Entwicklerportal",
  welcome: {
    title: "Willkommen im Wayfair API-Entwicklerportal",
    description: "Unser Ziel ist es, Ihre erfolgreiche Integration über API zu erleichtern und dabei Auftragsverwaltung, Bestand, Versand und andere unterstützte Workflows so reibungslos wie möglich zu gestalten.",
    subDescription: "Obwohl dieser Prozess größtenteils selbstständig durchgeführt werden kann, steht Wayfair bei Bedarf jederzeit zur Verfügung. Sie haben Zugang zu Dokumentationsseiten zur Fehlerbehebung und können Ihr API-Ticket mit offenen Fragen aktualisieren."
  },
  suppliers: {
    current: {
      title: "Aktive Wayfair-Lieferanten",
      description: "Wenn Sie ein aktiver Wayfair-Lieferant sind und sich für die Integration mit Wayfair-APIs interessieren, reichen Sie bitte hier ein Ticket ein. Wählen Sie aus den Dropdown-Menüs Inventory und EDI/API-Verbindung > Hilfe beim Einrichten einer EDI/API-Verbindung (Bestand, Bestellung, ASNs, Stornierung usw.) und wählen Sie dann die API-Integrationsoption."
    },
    prospective: {
      title: "Interessierte Verkäufer für Wayfair",
      description: "Wenn Sie derzeit kein Wayfair-Lieferant sind und einer werden möchten, besuchen Sie bitte unsere 'Bei Wayfair verkaufen'-Seite. Dort finden Sie die notwendigen Informationen, um sich als Wayfair-Lieferant einzurichten."
    }
  },
  auth: {
    description: "Die Wayfair-API verwendet OAuth-Client-Anmeldeinformationen in einem nicht-interaktiven Profil für Authentifizierung und Autorisierung. Die meisten API-Funktionen sind über GraphQL-Abfragen und -Mutationen zugänglich."
  },
  integration: {
    title: "Integrationsanleitung",
    description: "Um Sie durch den Integrationsprozess zu führen, lesen Sie bitte die folgenden Artikel:",
    note: "Es ist wichtig, diese Seiten gründlich zu lesen, damit wir Ihre Integration beschleunigen und Sie so schnell wie möglich live gehen können."
  },
  links: {
    submitTicket: "Ticket einreichen",
    sellOnWayfair: "Bei Wayfair verkaufen",
    apiDocs: "API-Dokumentation"
  },
  steps: {
    benefits: "API und ihre Vorteile",
    createApp: "Anwendung erstellen",
    auth: "Authentifizierung",
    testing: "API-Tests"
  },
  language: {
    select: "Sprache wählen",
    en: "English",
    zh: "中文",
    de: "Deutsch"
  },
  apiBenefits: {
    title: "API und ihre Vorteile",
    overview: {
      title: "Überblick",
      description: "Eine API (Application Programming Interface) ist eine definierte Methode zur Übertragung oder zum Austausch von Daten zwischen Systemen. Vereinfacht ausgedrückt ermöglicht sie die direkte Kommunikation zwischen zwei Systemen.",
      examples: {
        title: "Häufige Beispiele für API-Nutzung",
        example1: "Eine Terminplanungs-App, die automatisch Einträge zum Google-Kalender eines Benutzers hinzufügt.",
        example2: "Ein Widget, das die aktuelle Temperatur von weather.com abruft und anzeigt.",
        example3: "Eine Website mit einer dynamischen Kartenfunktion auf ihrer \"Kontakt\"-Seite."
      }
    },
    benefits: {
      title: "Vorteile",
      speed: {
        title: "Geschwindigkeit",
        description: "API-Verbindungen sind schneller als EDI, da die Verbindung direkt ist und kein VAN oder FTP zwischen den Systemen erforderlich ist."
      },
      flexibility: {
        title: "Flexibilität und Sicherheit",
        description: "APIs sind flexibler, sicherer und anpassbarer im Vergleich zu traditionellen EDI-Methoden."
      },
      cost: {
        title: "Kosteneffizienz",
        description: "Bei APIs fallen keine Transaktionskosten für Einzelposten oder Dokumente an, was zu geringeren Gesamtbetriebskosten führt."
      },
      compatibility: {
        title: "Kompatibilität",
        description: "Wayfairs API-Endpunkt kann in alle wichtigen Programmiersprachen integriert werden, einschließlich cURL, C#, Ruby, Python, JavaScript, PHP und Java."
      },
      customization: {
        title: "Anpassbarkeit",
        description: "APIs ermöglichen die Anpassung an Wayfair-spezifische Best Practices, ohne von extern festgelegten Standards oder Einschränkungen abhängig zu sein."
      },
      availability: {
        title: "Verfügbarkeit",
        description: "Mit APIs sind Informationen jederzeit verfügbar, und Datenübertragungen können in regelmäßigen Intervallen eingerichtet werden."
      },
      realtime: {
        title: "Echtzeitnahe Informationen",
        description: "Der Datenaustausch zwischen Lieferant und Wayfair erfolgt über APIs häufig, was zu nahezu Echtzeit-Informationsverfügbarkeit und weniger Nachbestellungen aufgrund von Bestandsknappheit führt."
      },
      integration: {
        title: "Integration",
        description: "APIs ermöglichen die vollständige Integration zwischen dem WMS des Lieferanten und den Wayfair-Systemen, wodurch manuelle Eingaben für die Bestandsverwaltung entfallen."
      }
    }
  },
  createSandbox: {
    title: "Anwendungen im Anwendungsmanagement erstellen",
    introduction: "Ihr erster Schritt zur Integration mit Wayfair-APIs ist die Erstellung von Anwendungen zur Interaktion mit dem API-Endpunkt. Dafür benötigen Sie einen Benutzer mit API-Zugriffsrolle in Partner Home.",
    steps: {
      access: {
        title: "API-Zugriffsrolle",
        content: "Stellen Sie sicher, dass Ihr Benutzer die API-Zugriffsrolle in Partner Home hat"
      },
      environment: {
        title: "Umgebung wählen",
        content: "Erstellen Sie während des Onboardings sowohl Sandbox- als auch Produktionsanwendungen"
      },
      testData: {
        title: "Testdaten",
        content: "Die Sandbox-Umgebung wird mit Test-Bestellungen gefüllt"
      },
      credentials: {
        title: "Sichere Anmeldedaten",
        content: "Speichern Sie Ihre Client-ID und Secret nach der Erstellung sicher"
      }
    },
    endpoints: {
      title: "API-Endpunkte",
      sandbox: {
        name: "Sandbox-Umgebung",
        url: "https://sandbox.api.wayfair.com/",
        description: "Für Tests und Entwicklung"
      },
      production: {
        name: "Produktionsumgebung",
        url: "https://api.wayfair.com/",
        description: "Für Live-Daten nach Abschluss der Tests"
      }
    },
    sandboxCreation: {
      title: "Sandbox-Anwendung erstellen",
      steps: [
        "Navigieren Sie zum Anwendungsmanagement in Partner Home",
        "Klicken Sie auf 'Neue Anwendung'",
        "Stellen Sie sicher, dass 'Sandbox' ausgewählt ist",
        "Geben Sie Namen und Beschreibung der Anwendung ein",
        "Speichern und sichern Sie Client-ID und Secret"
      ]
    },
    productionCreation: {
      title: "Produktionsanwendung erstellen",
      steps: [
        "Navigieren Sie zum Anwendungsmanagement in Partner Home",
        "Klicken Sie auf 'Neue Anwendung'",
        "Wechseln Sie zur 'Produktion'-Umgebung",
        "Geben Sie Namen und Beschreibung der Anwendung ein",
        "Speichern und sichern Sie Client-ID und Secret"
      ]
    },
    credentials: {
      title: "Client-ID und Secret-Verwaltung",
      description: "Ihre Client-ID und Secret sind entscheidend für die API-Authentifizierung. Sie werden nur einmal bei der Erstellung angezeigt.",
      warning: "Wenn Sie Ihr Client-Secret verlieren, können Sie ein neues generieren, indem Sie auf 'Anwendung bearbeiten' klicken und 'Secret rotieren' wählen."
    }
  },
  authentication: {
    title: "Authentifizierung",
    overview: {
      title: "Überblick",
      description: "Neben der Erstellung der ersten Anwendung ist die Authentifizierung ein wichtiger Teil des API-Onboarding-Prozesses. Die Authentifizierung erfolgt über einen OAuth-Client-Credentials-Workflow. Sie senden Ihre Client-ID und Ihr Secret an den Token-Abruf-Endpunkt, um ein neues Zugriffstoken zu erhalten. Dieses authentifizierte Token muss in allen zukünftigen API-Aufrufen enthalten sein."
    },
    tokenExpiration: {
      title: "Token-Ablauf",
      description: "Tokens haben eine Ablaufzeit von 12 Stunden. Überprüfen Sie das exp-Feld im Token auf das Ablaufdatum/-zeit in Sekunden, um zu sehen, wann Sie sich erneut authentifizieren müssen, indem Sie ein neues Token abrufen.",
      recommendation: "Es wird empfohlen, einen Puffer zwischen der aktuellen Zeit und der Ablaufzeit zu halten. Beispielsweise würde das Abrufen eines Tokens alle 6 Stunden Ihnen etwas Spielraum geben, um im Falle eines Ausfalls ein neues Token zu erhalten."
    },
    clientCredentials: {
      title: "Client-Anmeldeinformationen",
      description: "Wenn Sie der Seite 'Anwendung erstellen' gefolgt sind, haben Sie bereits eine Anwendung registriert, die Ihnen eine Client-ID und ein Secret zuweist. Sie übergeben die Werte der Client-ID und des Secrets an den Token-Endpunkt."
    },
    tokenResponse: {
      title: "Token-Antwort",
      description: "Die Token-Antwort enthält:",
      fields: {
        accessToken: "Zugriffstoken (access_token)",
        expiresIn: "Ablauflänge in Sekunden (expires_in)",
        scope: "derzeit dem Token zugewiesene Bereiche (scope)",
        tokenType: "Typ des Tokens (token_type)"
      },
      usage: "Bei Anfragen an die API müssen Sie Ihren HTTP-Authorization-Header auf {token_type} {access_token} aus Ihrer Token-Antwort setzen.",
      example: "Dies sieht etwa so aus: Authorization: Bearer eyJ0eXAiOiJKV1Qi...X1rNJFNVGBwmFQ5tepKwno7DEIjDg"
    },
    audienceUrls: {
      title: "Audience-URLs",
      note: "Beachten Sie, dass sich die Audience-URL für Sandbox- und Produktionsanwendungen unterscheidet.",
      sandbox: "Sandbox-Anwendungen sollten https://sandbox.api.wayfair.com/ verwenden",
      production: "Produktionsanwendungen sollten https://api.wayfair.com/ verwenden"
    }
  },
  apiTesting: {
    title: "API-Tests",
    introduction: {
      title: "Erste Schritte mit Tests",
      description: "Jetzt, da Sie Ihre Sandbox-Anwendung, Client-ID/Secret und ein Token für die Authentifizierung haben, ist es an der Zeit, mit dem Testen zu beginnen. Sie müssen nachweisen, dass Sie in der Lage sind, einen Workflow in unserer Sandbox-Umgebung genau und zuverlässig durchzuführen, bevor Ihr Konto in Wayfairs Produktionsumgebung verifiziert wird. Alle Instrumente, die Sie dafür benötigen, finden Sie im Abschnitt Entwickler-Tools."
    },
    graphiql: {
      title: "Verwendung des GraphiQL Explorers",
      description: "Wenn Sie zum GraphiQL Explorer im Entwickler-Tab navigieren und Ihre Sandbox-Anwendung auswählen, können Sie Beispiele für alle verfügbaren Abfragen/Mutationen von Wayfair generieren und Codebeispiele in Ihrer bevorzugten Programmiersprache erstellen.",
      codeGeneration: "Durch Klicken auf 'Code anzeigen' und dann auf die Schaltfläche 'Kopieren' auf dieser Seite können Sie Syntaxfehler vermeiden und sicherstellen, dass Sie während des Testens auf so wenige Probleme wie möglich stoßen.",
      moreInfo: "Weitere Details zu GraphiQL finden Sie, indem Sie in der linken Seitenleiste zu Entwickler-Tools gehen und dann auf GraphiQL-Übersicht klicken."
    },
    endpoints: {
      title: "API-Endpunkte",
      sandbox: {
        title: "Sandbox-Endpunkt",
        description: "Bei Verwendung einer Sandbox-Anwendung (zum Testen) sollte der Endpunkt Ihrer Abfragen sein:",
        url: "https://sandbox.api.wayfair.com/v1/graphql"
      },
      production: {
        title: "Produktionsendpunkt",
        description: "Für Produktionsanwendungen:",
        url: "https://api.wayfair.com/v1/graphql"
      },
      note: "Sie können diese Endpunkte auf der Seite Anwendungsmanagement einsehen."
    },
    workflow: {
      title: "Workflow-Tests",
      note: "Bitte aktualisieren Sie Ihr API-Ticket am Ende jedes Workflows, damit sie den Integrationserfolg und die Datenkorrektheit validieren können.",
      production: "Sobald alle Workflows getestet wurden, wechseln Sie zur Produktionsanwendung, um Live-Daten zu beeinflussen."
    }
  },
  applicationManagement: {
    title: "Anwendungsmanagement",
    overview: {
      description: "Das Anwendungsmanagement-Tool wird verwendet, um Anwendungen zu erstellen, mit denen Sie eine Anfrage senden und die Antwort vom API-Endpunkt empfangen können. Um eine Anwendung zu erstellen, klicken Sie auf die Schaltfläche \"Neue Anwendung\"."
    },
    steps: {
      sandbox: {
        title: "Erstellen einer Sandbox-Anwendung",
        description: "Um mit dem Testen der API-Integration zu beginnen, muss eine Sandbox-Anwendung erstellt werden. Navigieren Sie zur Anwendungsmanagement-Seite und klicken Sie auf die Schaltfläche \"Neue Anwendung\"."
      },
      production: {
        title: "Erstellen einer Produktionsanwendung",
        description: "Nach der Erstellung einer Sandbox-Anwendung erstellen Sie eine Produktionsanwendung. Sie wechseln zu dieser, nachdem das Testen abgeschlossen ist, um Anfragen an api.wayfair.com zu senden."
      },
      credentials: {
        title: "Verwaltung von Client-Anmeldeinformationen",
        description: "Bei der Erstellung der Anwendung erhalten Sie eine Client-ID und ein Client-Secret zur Authentifizierung. Bewahren Sie diese sicher auf, da sie nur einmal angezeigt werden."
      }
    },
    creation: {
      title: "Erstellen einer Anwendung",
      steps: {
        newApp: {
          icon: "Plus",
          text: "Klicken Sie auf \"Neue Anwendung\", um zu beginnen"
        },
        environment: {
          icon: "ToggleLeft",
          text: "Wählen Sie die Umgebung (Sandbox/Produktion)"
        },
        details: {
          icon: "Save",
          text: "Geben Sie den Anwendungsnamen und die Beschreibung ein"
        }
      }
    },
    credentials: {
      title: "Client-ID und Client-Secret",
      description: "Sobald eine Anwendung erstellt ist, erscheint ein neues Popup-Fenster mit der Client-ID und dem Client-Secret, die dann zur Generierung des Tokens für die Authentifizierung verwendet werden. Dies ist das einzige Mal, dass Sie die Client-ID und das Secret sehen können, also kopieren und speichern Sie sie sicher.",
      warning: "Wenn Sie das Client-Secret verloren haben, können Sie ein neues generieren, indem Sie auf die Schaltfläche \"Anwendung bearbeiten\" klicken und dann die Schaltfläche \"Secret rotieren\" verwenden."
    }
  },
  graphql: {
    title: "GraphQL",
    introduction: {
      description: "GraphQL ist eine API-Abfragesprache. Sie ermöglicht es dem Client, den Server nur nach den Daten zu fragen, die er benötigt. Eine Einführung in GraphQL finden Sie auf graphql.org. GraphQL-Anfragen erfolgen weiterhin über einen HTTP-POST, enthalten immer eine Abfrage als Bestandteil des POST-Körpers und können auch Variablen als Teil des POST-Körpers enthalten.",
      endpoint: "Wenn Sie auf einen GraphQL-Endpunkt verweisen, müssen Sie v1/graphql/ zur URL hinzufügen, die Sie zur Verbindung mit Wayfair verwenden."
    },
    types: {
      note: "Beachten Sie, dass aufgrund des Typsystems von GraphQL nicht alle Typen in diesen Dokumenten enthalten sein werden. Sie sollten GraphiQL besuchen, um das Schema weiter zu erkunden."
    },
    why: {
      title: "Warum GraphQL",
      description: "Wir verwenden GraphQL, weil es Ihnen die Möglichkeit gibt, genau zu bestimmen, welche Informationen Sie von der API erhalten möchten. GraphQL löst elegant die Probleme des Über- und Unterabfragens. Sie sagen dem Server, welche Daten Sie möchten, und Sie erhalten nur die Daten, die Sie wollten."
    }
  },
  graphiql: {
    title: "GraphiQL-Übersicht",
    overview: "GraphiQL ist eine integrierte Entwicklungsumgebung (IDE). Eine IDE ist ein Werkzeug für Entwickler, um Code in einer bestimmten Programmiersprache zu schreiben und auszuführen. GraphiQL funktioniert genauso, jedoch in der GraphQL-Sprache.",
    access: "Sie können auf GraphiQL über Partner Home zugreifen oder direkt über den bereitgestellten Link navigieren.",
    sections: {
      appSelection: {
        title: "Anwendungsauswahl",
        content: "Wählen Sie Ihre Anwendung und Umgebung (Sandbox/Produktion), um mit dem Testen zu beginnen. Sehen Sie sich Ihre Token-Bereiche an und erkunden Sie das API-Schema mit Voyager."
      },
      exampleGen: {
        title: "Beispielgenerierung",
        content: "Generieren Sie Beispielabfragen und -mutationen, greifen Sie auf Dokumentationen zu und sehen Sie sich Codebeispiele in mehreren Programmiersprachen an."
      },
      ide: {
        title: "IDE-Umgebung",
        content: "Bearbeiten und testen Sie Abfragen/Mutationen, formatieren Sie Code und sehen Sie sich Ihren Abfrageverlauf an einem Ort an."
      }
    },
    codeGen: {
      title: "Code-Generierung",
      steps: [
        "Klicken Sie im Fenster Beispielgenerierung auf die Schaltfläche 'Code anzeigen'",
        "Wählen Sie Ihre bevorzugte Programmiersprache aus dem Dropdown-Menü",
        "Kopieren oder laden Sie den generierten Code-Schnipsel herunter",
        "Verwenden Sie den Code in Ihrer Anwendung"
      ]
    },
    history: {
      title: "Abfrageverlauf",
      description: "Greifen Sie auf Ihre zuvor ausgeführten Abfragen und Mutationen zu und führen Sie sie erneut aus."
    },
    docExplorer: {
      title: "Dokumentations-Explorer",
      description: "Erkunden Sie verfügbare Abfragen, Mutationen, Felder und deren Typen mit dem integrierten Dokumentationsbrowser.",
      steps: [
        "Klicken Sie auf die Schaltfläche 'Dokumente', um den Dokumentations-Explorer zu öffnen",
        "Navigieren Sie durch Felder und Typen",
        "Klicken Sie auf orangefarbene Felder, um Unterfelder zu erkunden",
        "Sehen Sie sich detaillierte Informationen zu jedem Feld und Typ an"
      ]
    }
  },
  postman: {
    title: "Verwendung von Postman",
    http: {
      title: "HTTP-Anfragen",
      description: "HTTP steht für Hypertext Transfer Protocol und ist ein Mittel, mit dem Server und Clients über das Internet Daten durch \"Anfragen\" austauschen. Es gibt verschiedene Arten von HTTP-Anfragen, die unterschiedlich strukturiert sind und unterschiedliche Informationen enthalten.",
      get: {
        title: "HTTP GET-Anfrage",
        description: "Die HTTP GET-Anfrage wird ausschließlich verwendet, um Daten vom Server abzurufen. Anfragen dieser Art können keine Daten ändern und enthalten keinen Anfragetext. Stattdessen verwenden GET-Anfragen \"Abfrageparameter\", um anzugeben, welche Daten der Server zurückgeben soll."
      },
      post: {
        title: "HTTP POST-Anfrage",
        description: "Die HTTP POST-Anfrage unterscheidet sich von der GET-Anfrage, da sie normalerweise Daten enthält, die zum Aktualisieren oder Erstellen von Daten auf dem Server verwendet werden. Anstatt Abfrageparameter zu verwenden, um Daten vom Client an den Server zu übermitteln, enthalten POST-Anfragen normalerweise einen sogenannten Anfragetext."
      }
    },
    intro: {
      title: "Postman",
      description: "Postman ist ein praktisches Tool zur Interaktion mit APIs durch Erstellen und Senden von HTTP-Anfragen. Postman bietet dem Benutzer eine intuitive Benutzeroberfläche, die einfach zu navigieren ist und das Erstellen von API-Anfragen erleichtert.",
      features: [
        "Erstellen und Speichern von Sammlungen von API-Anfragen",
        "Testen von API-Endpunkten ohne Code zu schreiben",
        "Generieren von Code-Snippets in mehreren Programmiersprachen",
        "Anzeigen von Anfragenverlauf und Antwortdaten",
        "Einrichten von Umgebungsvariablen und Authentifizierung"
      ]
    },
    auth: {
      title: "Authentifizierung",
      description: "Die primäre Form der Authentifizierung bei Wayfair erfolgt über den O-Auth-Client-Credentials-Workflow. Alles, was Sie zur Authentifizierung bei Wayfair benötigen, ist eine gültige \"Client-ID\" und ein \"Client-Secret\".",
      steps: [
        "Stellen Sie den Anfragetyp auf POST ein",
        "Setzen Sie die Anfragen-URL auf https://sso.auth.wayfair.com/oauth/token",
        "Erstellen Sie den Anfragetext mit Ihren Client-Anmeldeinformationen",
        "Senden Sie die Anfrage und erhalten Sie das Zugriffstoken"
      ]
    },
    integration: {
      title: "API-Integration",
      description: "Sobald Sie ein Token aus dem Authentifizierungs-Workflow haben, können Sie Anfragen an die Wayfair-API stellen.",
      steps: [
        "Richten Sie Ihre Anfrage-Header mit dem Authentifizierungstoken ein",
        "Wählen Sie die entsprechende HTTP-Methode (GET/POST)",
        "Konfigurieren Sie Anfragenparameter oder -text nach Bedarf",
        "Senden Sie die Anfrage und verarbeiten Sie die Antwort"
      ]
    },
    collections: {
      title: "Erstellen von Sammlungen",
      description: "In Postman können Sie eine Sammlung gespeicherter Anfragen erstellen, sodass Sie dieselbe Anfrage nicht immer wieder neu erstellen müssen.",
      steps: [
        "Öffnen Sie die Registerkarte Sammlungen in der Seitenleiste",
        "Klicken Sie auf die Schaltfläche '+ Neue Sammlung'",
        "Benennen Sie Ihre Sammlung und fügen Sie eine Beschreibung hinzu",
        "Beginnen Sie mit dem Hinzufügen von Anfragen zu Ihrer Sammlung"
      ]
    },
    history: {
      title: "Anfragenverlauf",
      description: "Postman speichert ein Protokoll aller gesendeten Anfragen, sodass Sie frühere Anfragen überprüfen und wiederverwenden können.",
      steps: [
        "Öffnen Sie die Registerkarte Verlauf in der Seitenleiste",
        "Durchsuchen Sie Ihre vorherigen Anfragen",
        "Klicken Sie auf eine beliebige Anfrage, um deren Details anzuzeigen",
        "Verwenden oder ändern Sie frühere Anfragen nach Bedarf"
      ]
    },
    codeGen: {
      title: "Code-Generierung",
      description: "Postman kann Code-Snippets für Ihre Anfragen in verschiedenen Programmiersprachen generieren.",
      steps: [
        "Erstellen und konfigurieren Sie Ihre Anfrage in Postman",
        "Klicken Sie auf die Schaltfläche 'Code' unter der Anfragen-URL",
        "Wählen Sie Ihre bevorzugte Programmiersprache",
        "Kopieren Sie das generierte Code-Snippet"
      ]
    }
  },
  integrationStatus: {
    title: "API-Integrationsstatus",
    introduction: {
      title: "Einführung",
      description: "Lieferanten, die erfolgreich API-Aufrufe gesendet haben, die den Testkriterien von Wayfair entsprechen, können sich über die Seite Lieferanten-Integrationsstatus selbst die Berechtigung erteilen, für bestimmte APIs in die Produktion zu gehen."
    },
    production: {
      title: "Wie man in die Produktion gelangt",
      steps: [
        "Wählen Sie den entsprechenden Lieferantennamen über das Dropdown-Menü aus",
        "Suchen Sie nach APIs mit dem Status 'Bereit für die Produktion'",
        "Klicken Sie auf 'Anzeigen/Aktualisieren' für die gewünschte API",
        "Überprüfen Sie die richtige Anwendung und den Lieferantennamen",
        "Schalten Sie den Schalter 'Live in Produktion' um"
      ],
      note: "Sie können den Statusverlauf Ihrer Sandbox-Anwendung anzeigen, indem Sie oben im Panel auf 'Verlauf anzeigen' klicken."
    },
    supportedApis: {
      title: "Unterstützte APIs",
      description: "Derzeit können Lieferanten für die folgenden APIs selbstständig in die Produktion gehen:",
      list: [
        "Bestellabfrage und -antwort",
        "Vorausversandbenachrichtigungen",
        "Registrierung und Versandetikettenerstellung"
      ],
      note: "Weitere werden in Zukunft hinzugefügt."
    },
    requirements: {
      title: "Anforderungen für die Produktion",
      prerequisites: [
        "Eine Produktionsanwendung erstellt",
        "API-Aufrufe gesendet, die den Testkriterien entsprechen"
      ],
      criteria: {
        title: "Testkriterien nach API",
        purchaseOrders: "Erfolgreich eine Bestellung abfragen und eine Annahme senden",
        asn: "Erfolgreich eine ASN senden",
        shipping: "Erfolgreich eine Registrierung senden und ein Versandetikett abrufen"
      },
      note: "Wenn Sie glauben, die Testkriterien erfüllt zu haben, aber den Status 'Bereit für die Produktion' nicht sehen, aktualisieren Sie bitte Ihr Integrationsticket für Unterstützung."
    },
    access: {
      note: "Wenn Sie nicht wissen, warum Sie keinen Zugang zur Produktion haben, aktualisieren Sie bitte Ihr Integrationsticket und jemand wird Ihnen helfen."
    },
    disable: {
      description: "Wenn Sie in der Produktion sind und nicht mehr sein möchten, finden Sie die richtige API auf der Seite Lieferanten-Integrationsstatus. Klicken Sie dann auf 'Anzeigen/Aktualisieren' und schalten Sie die entsprechende Anwendung auf 'Nein'. Sie sehen eine Warnmeldung. Klicken Sie auf 'Anwendung in Produktion deaktivieren'."
    }
  },
  vetting: {
    title: "Überprüfungsseite",
    description: "Die Überprüfungsseite ist ein Tool für Lieferanten, um zu überprüfen, ob ihre Bestandsfeeds erfolgreich von Wayfair empfangen wurden, und um Bestellungen zu überprüfen. Für Bestände bietet das Tool eine Vergleichsansicht, um die Abweichung zwischen API-Testdaten und aktuellen Produktionsdaten zu bewerten. Für Bestellungen zeigt es alle Antworten des Lieferanten, einschließlich der Annahme der Bestellung und der Versandmutationen.",
    usage: {
      title: "Verwendung der Überprüfungsseite",
      selectApp: "Wählen Sie die Anwendung aus, für die Sie die Ergebnisse möchten, und klicken Sie im Dialogfeld 'Anwendung auswählen' auf die Schaltfläche 'Anwendung wechseln', um die Ergebnisse zu laden.",
      tabs: "Direkt unter der Anwendungsauswahl finden Sie zwei Registerkarten, eine für 'Bestand' und eine für 'Bestellungen'. Sie sollten auf die entsprechenden Registerkarten klicken, um die Testergebnisse für diese bestimmte API zu sehen. Wenn Sie separate Anwendungen für Bestands- und Auftragsverwaltung haben, müssen Sie die entsprechende Anwendung und Registerkarte auswählen."
    },
    inventory: {
      title: "Felddefinitionen - Bestand",
      description: "Diese Felder bieten detaillierte Informationen über Bestandsfeeds und Vergleiche.",
      fields: {
        supplierId: "Lieferanten-ID",
        supplierIdDesc: "Eindeutige ID, die jedem Lieferanten zugewiesen wird.",
        apiFeed: "API-Sandbox-Feed",
        apiFeedDesc: "Bestandsfeed aus der API-Sandbox-Umgebung.",
        apiFeedId: "API-Sandbox-Feed - ID",
        apiFeedIdDesc: "Datenbank-ID für den Bestandsfeed in der Sandbox-Umgebung.",
        apiFeedDate: "API-Sandbox-Feed - Datum",
        apiFeedDateDesc: "Datum, an dem der API-Bestandsfeed empfangen wurde.",
        otherFeed: "Anderer Feed",
        otherFeedDesc: "Bestandsfeed von Nicht-API-Plattformen wie FTP, EDI, Extranet usw.",
        otherFeedId: "Anderer Feed - ID",
        otherFeedIdDesc: "Datenbank-ID für den Nicht-API-Bestandsfeed in der Sandbox-Umgebung.",
        otherFeedDate: "Anderer Feed - Datum",
        otherFeedDateDesc: "Datum, an dem der Nicht-API-Bestandsfeed empfangen wurde.",
        avgVariance: "Durchschnittliche Mengenabweichung",
        avgVarianceDesc: "Durchschnittliche Mengenabweichung zwischen API- und anderem Feed - nur für übereinstimmende Teile. N/A = keine Teile stimmen zwischen den Feeds überein.",
        unmatchedParts: "Nicht übereinstimmende Teile",
        unmatchedPartsDesc: "Gesamtanzahl der unterschiedlichen Teile, die im API-Feed gefunden werden, aber im Nicht-API-Bestandsfeed fehlen.",
        distinctParts: "Unterschiedliche Teile",
        distinctPartsDesc: "Gesamtanzahl der unterschiedlichen Teile (nach Teilenummer) im API-Feed."
      }
    },
    po: {
      title: "Felddefinitionen - Bestellungen",
      description: "Diese Felder bieten Informationen über Bestellungen und deren Status.",
      fields: {
        poNumber: "Bestellnummer",
        poNumberDesc: "Eindeutige Nummer, die einer Bestellung zugeordnet ist",
        supplierId: "Lieferanten-ID",
        supplierIdDesc: "Eindeutige ID zur Identifizierung jedes Lieferanten",
        date: "Datum",
        dateDesc: "Datum, an dem die Bestellung erstellt wurde"
      }
    },
    context: {
      title: "Zusätzlicher Kontext",
      points: [
        "Die Bestandsdaten werden nur 7 Tage ab dem Tag gespeichert, an dem sie gesendet wurden.",
        "Die Überprüfungsseite zeigt nur feedKind: TRUE_UP-Feeds an und ignoriert alle feedKind: DIFFERENTIAL-Feeds.",
        "Derzeit kann der Lieferant nur die ANNAHME-Antwort für die Bestellung über die API senden. RÜCKSTAND/ABLEHNUNG müssen weiterhin über Partner Home durchgeführt werden."
      ]
    }
  },
  metrics: [
    { vertical: 'Teppiche', preApi: '0.17', postApi: '0.14', reduction: '18%' },
    { vertical: 'Outdoor', preApi: '1.86', postApi: '0.25', reduction: '68%' },
    { vertical: 'Bettwäsche', preApi: '0.63', postApi: '0.48', reduction: '24%' },
    { vertical: 'Möbel-Schlafzimmer', preApi: '0.53', postApi: '0.22', reduction: '58%' },
    { vertical: 'Möbel-Küche', preApi: '0.95', postApi: '0.21', reduction: '78%' }
  ]
};