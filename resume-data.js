/*
 * All site content lives here. Edit this file to update the portfolio and the printable resume.
 *
 * Tips
 * - Every experience or project item can take an optional `image: "images/your-file.webp"`.
 * - Projects can take an optional `link: "https://..."`.
 * - `highlights` are the three figures shown in the hero. Keep them factual.
 */
window.resumeData = {
  base: {
    name: "Karanjit Singh",
    initials: "KS",
    photo: "images/portrait-office.webp",
    heroImage: "images/portrait.webp",
    contact: {
      email: "karanjit96@gmail.com",
      phone: "+49 176 20286951",
      address: ["Schneiderstraße 7", "66687 Wadern", "Germany"]
    },
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/karanjit-singh" },
      { label: "GitHub", href: "https://github.com/karanjit96" }
    ],
    gallery: [
      { src: "images/presenting.webp", key: "presenting", wide: true },
      { src: "images/portrait.webp", key: "portrait" },
      { src: "images/meeting.webp", key: "meeting" },
      { src: "images/portrait-office.webp", key: "office" },
      { src: "images/profile.webp", key: "profile" }
    ]
  },

  en: {
    ui: {
      skip: "Skip to content",
      menu: "Menu",
      close: "Close",
      navAbout: "About",
      navExperience: "Experience",
      navProjects: "Projects",
      navSkills: "Skills",
      navGallery: "Gallery",
      navResume: "Resume",
      available: "Based in Germany",
      viewResume: "View resume",
      contactMe: "Get in touch",
      expKicker: "Career",
      expTitle: "Experience",
      expLead: "From the factory floor to field quality: roles across automotive, software and AI.",
      showDetails: "Show details",
      hideDetails: "Hide details",
      projectKicker: "Selected work",
      projectTitle: "Projects",
      projectLead: "AI and data products I have conceived, designed and delivered.",
      visit: "Visit",
      skillsKicker: "Toolbox",
      skillsTitle: "Skills & languages",
      educationTitle: "Education",
      galleryKicker: "Moments",
      galleryTitle: "Gallery",
      gallery: {
        presenting: "Presenting a KPI dashboard",
        portrait: "Portrait",
        meeting: "In a meeting",
        office: "At the office",
        profile: "Profile"
      },
      resumeKicker: "Download",
      resumeTitle: "Resume",
      resumeLead: "Pick a template and save it as a PDF in A4.",
      template: "Template",
      density: "A4 density",
      print: "Print / Save PDF",
      templates: { modern: "Modern", classic: "Classic", compact: "Compact", minimal: "Minimal", executive: "Executive", ats: "ATS" },
      densities: { standard: "Standard", balanced: "Balanced", dense: "Dense" },
      profile: "Profile",
      contact: "Contact",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      personal: "Personal",
      ctaTitle: "Let's talk quality, software and AI.",
      ctaText: "Open to conversations about field quality, OTA and AI in automotive.",
      footer: "Built with plain HTML, CSS and JavaScript."
    },
    role: "Senior Specialist Customer Quality · smart Europe",
    summary: "Senior Specialist Customer Quality with hands-on experience in field quality, OTA and software quality, diagnostics and service engineering in electric mobility. Proven track record in cross-functional collaboration across global regions, quality KPI steering, claiming and escalation workflows, and structured problem solving. Built on prior roles in technical support, project management and AI-enabled solution delivery across automotive and digital products.",
    highlights: [
      { value: "2018", label: "In automotive since" },
      { value: "4", label: "Languages spoken" },
      { value: "2", label: "National swimming records" }
    ],
    experience: [
      {
        title: "Senior Specialist Customer Quality",
        company: "smart Europe",
        place: "Leinfelden-Echterdingen, Germany",
        period: "May 2026 – Present",
        tags: ["Field quality", "OTA", "AI insights", "KPI dashboards"],
        bullets: [
          "Created the concept for an AI-powered Quality Portal for the QM team that turns CEC and REC customer cases into insights: automatic multi-label issue categorization, translation, top issue trends and KPI dashboards.",
          "Designed early warning alerts for sudden spikes of cases on the same issue, plus AI-drafted 5W2H evidence packages that make escalations to HQ faster and more complete.",
          "Built a working MVP demo of the portal and brought it into the IT planning cycle as a business requirement for 2027.",
          "Developed a concept to automate the EU parts return process, from shipment booking and label creation to dealer notification and status follow-up.",
          "Manage and optimize field quality processes across complaint management, field performance monitoring and failure analysis, with continuous improvement across regions.",
          "Own and coordinate claiming channels, especially CEC inputs, ensuring robust evaluation, classification and feedback into the field quality system.",
          "Lead cross-functional collaboration across Europe, China and global stakeholders to align hardware and software quality strategy, standards and learnings.",
          "Oversee software, app and OTA quality topics, driving rapid issue detection, escalation handling and sustainable countermeasures with engineering teams.",
          "Build and run quality KPI dashboards and analytics to identify systemic risks early and support proactive management decisions.",
          "Support new model launches and digital feature rollouts while representing the European field quality voice in global forums."
        ]
      },
      {
        title: "Technical Support Specialist Consultant",
        company: "smart Europe GmbH",
        place: "Leinfelden-Echterdingen, Germany",
        period: "Feb 2024 – Present",
        tags: ["OTA operations", "2nd level support", "VPC"],
        bullets: [
          "Oversee OTA software update operations for vehicles, ensuring stable deployment across Europe and reporting insights to drive strategic improvements.",
          "Provide 2nd level technical support for OTA issues and initiate process refinements and change requests to improve platform capabilities.",
          "Develop OTA knowledge articles and Q&A documents, improving readiness of customer facing support teams.",
          "Supported the setup of a new Vehicle Preparation Center for OTA PDI in Antwerp, Belgium.",
          "Train teams, handle daily troubleshooting, and administer diagnostics, 4G and OTA activations for two VPCs."
        ]
      },
      {
        title: "AI Specialist",
        company: "BXL digital GmbH",
        place: "Frankfurt am Main, Germany",
        period: "Feb 2023 – Present",
        tags: ["GPT", "Computer vision", "Recommendation"],
        bullets: [
          "Created an AI-powered Apple Vision Pro app for people with hearing and speaking challenges, using GPT for speech recognition, subtitle generation and speech output.",
          "Deployed ML-based image classification and AI recommendation features for a jewelry app, improving engagement.",
          "Implemented an AI-powered web scraper to automate data collection and reduce manual work.",
          "Developed the GPT-powered dog recommendation engine FindAdog for personalized suggestions.",
          "Researched and implemented an ML-based fleet management and demand prediction algorithm (thesis related)."
        ]
      },
      {
        title: "Technical Project Manager Consultant",
        company: "smart Europe GmbH",
        place: "Leinfelden-Echterdingen, Germany",
        period: "Feb 2023 – Feb 2024",
        tags: ["IT delivery", "PMO", "Release management"],
        bullets: [
          "Coordinated development leads, delivery leads and release managers to execute IT milestones despite scope and capacity shifts.",
          "Streamlined scope prioritization and timeline control to align delivery with strategic goals.",
          "Led cross-team planning with PMO counterparts, including synchronized timelines and business testing activities.",
          "Acted as the communication bridge between PMO, IT teams and senior leadership to improve visibility and decisions."
        ]
      },
      {
        title: "Working Student",
        company: "Mercedes-Benz",
        place: "Rastatt, Germany",
        period: "Mar 2020 – Mar 2021",
        tags: ["Paperless factory", "IT support"],
        bullets: [
          "Contributed to the operations manual for the paperless factory by cataloging network jacks and updating equipment inventories.",
          "Researched and benchmarked ticketing systems for documentation and process requirements.",
          "Coordinated delivery timelines with vendors and supported first level IT issues for production end devices."
        ]
      },
      {
        title: "Internships",
        company: "Mercedes-Benz / Siemens AG",
        place: "Rastatt, Aguascalientes, Hambach, Karlsruhe",
        period: "Apr 2018 – Feb 2020",
        tags: ["Smart glasses", "KPI design"],
        bullets: [
          "Supported KPI and communication cycle design for IT work packages in the paperless factory program.",
          "Identified software requirements and tested hardware solutions including smart glasses for production teams.",
          "Completed practical modules in mechanics, metalworking and electrical engineering at Siemens AG."
        ]
      }
    ],
    projects: [
      {
        title: "AI Quality Portal for Customer Cases",
        meta: "Concept and MVP for smart Europe QM",
        bullets: ["Turns CEC and REC customer cases into insights with AI categorization, translation, trend dashboards, spike alerts and ready-to-send 5W2H escalation packages."]
      },
      {
        title: "Apple Vision Pro Accessibility App",
        meta: "GPT speech recognition, live subtitles and voice output",
        bullets: ["Built for people with hearing and speaking challenges."]
      },
      {
        title: "FindAdog Recommendation Engine",
        meta: "GPT-powered recommendation product",
        link: "https://findadog.de/",
        bullets: ["Delivers personalized dog suggestions to increase user engagement."]
      },
      {
        title: "Fleet Demand Prediction",
        meta: "ML forecasting and planning model",
        bullets: ["Improved demand visibility for operational planning."]
      },
      {
        title: "AI Data Collection Automation",
        meta: "AI web scraper and data pipeline",
        bullets: ["Reduced manual effort and sped up analysis for business decisions."]
      }
    ],
    education: [
      { degree: "Bachelor in Mechatronics", school: "Hochschule Karlsruhe, Technik und Wirtschaft", period: "2018 – 2023", grade: "Overall grade 2.5" },
      { degree: "Studienkolleg", school: "Hochschule Wismar", grade: "Grade 1.3" },
      { degree: "High school graduation", school: "Police D.A.V. Public School, Jalandhar (India)", grade: "89%" }
    ],
    skillGroups: [
      { name: "Quality", items: ["Field Quality Management", "Warranty and claiming channels (CEC)", "Root cause analysis (8D, DMAIC, FMEA)", "Business intelligence dashboards"] },
      { name: "AI & Data", items: ["Python (ML, data analysis)", "TensorFlow", "PyTorch", "scikit-learn", "OpenAI APIs"] },
      { name: "Engineering", items: ["C++", "MATLAB", "Ansys", "LT-Spice", "Keil", "SPS"] },
      { name: "Collaboration", items: ["Confluence", "Jira", "MS Office"] }
    ],
    languages: [
      { name: "English", level: "C1" },
      { name: "German", level: "C1" },
      { name: "Hindi", level: "C1" },
      { name: "Punjabi", level: "C1" }
    ],
    personal: [
      "Date of birth: 02.04.1996",
      "Place of birth: Basti Bawa Khel, India",
      "Nationality: Indian",
      "Swimming: 2 national records, around 200 medals",
      "Hobbies: Traveling, Fitness"
    ]
  },

  de: {
    ui: {
      skip: "Zum Inhalt springen",
      menu: "Menü",
      close: "Schließen",
      navAbout: "Profil",
      navExperience: "Erfahrung",
      navProjects: "Projekte",
      navSkills: "Kenntnisse",
      navGallery: "Galerie",
      navResume: "Lebenslauf",
      available: "Wohnhaft in Deutschland",
      viewResume: "Lebenslauf ansehen",
      contactMe: "Kontakt aufnehmen",
      expKicker: "Werdegang",
      expTitle: "Berufserfahrung",
      expLead: "Von der Fertigung bis zur Feldqualität: Stationen in Automotive, Software und KI.",
      showDetails: "Details anzeigen",
      hideDetails: "Details ausblenden",
      projectKicker: "Ausgewählte Arbeiten",
      projectTitle: "Projekte",
      projectLead: "KI- und Datenprodukte, die ich konzipiert und umgesetzt habe.",
      visit: "Ansehen",
      skillsKicker: "Werkzeugkasten",
      skillsTitle: "Kenntnisse & Sprachen",
      educationTitle: "Ausbildung",
      galleryKicker: "Momente",
      galleryTitle: "Galerie",
      gallery: {
        presenting: "Präsentation eines KPI-Dashboards",
        portrait: "Porträt",
        meeting: "Im Meeting",
        office: "Im Büro",
        profile: "Profil"
      },
      resumeKicker: "Download",
      resumeTitle: "Lebenslauf",
      resumeLead: "Vorlage wählen und als PDF im A4-Format speichern.",
      template: "Vorlage",
      density: "A4-Dichte",
      print: "Drucken / PDF speichern",
      templates: { modern: "Modern", classic: "Klassisch", compact: "Kompakt", minimal: "Minimal", executive: "Executive", ats: "ATS" },
      densities: { standard: "Standard", balanced: "Ausgewogen", dense: "Kompakt" },
      profile: "Profil",
      contact: "Kontakt",
      experience: "Berufserfahrung",
      projects: "Projekte",
      education: "Ausbildung",
      skills: "Kenntnisse",
      languages: "Sprachen",
      personal: "Persönliche Daten",
      ctaTitle: "Lassen Sie uns über Qualität, Software und KI sprechen.",
      ctaText: "Offen für Gespräche zu Feldqualität, OTA und KI im Automotive-Umfeld.",
      footer: "Erstellt mit HTML, CSS und JavaScript."
    },
    role: "Senior Specialist Customer Quality · smart Europe",
    summary: "Senior Specialist Customer Quality mit fundierter Erfahrung in Field Quality, OTA- und Softwarequalität, Diagnostik und Service Engineering im E-Mobility-Umfeld. Nachgewiesene Stärke in globaler, cross-funktionaler Zusammenarbeit, KPI-Steuerung, Claiming- und Eskalationsprozessen sowie strukturierter Problemlösung. Aufbauend auf früheren Rollen in Technical Support, Projektmanagement und KI-Projekten.",
    highlights: [
      { value: "2018", label: "Im Automotive-Umfeld seit" },
      { value: "4", label: "Sprachen" },
      { value: "2", label: "Nationale Schwimmrekorde" }
    ],
    experience: [
      {
        title: "Senior Specialist Customer Quality",
        company: "smart Europe",
        place: "Leinfelden-Echterdingen",
        period: "Mai 2026 – heute",
        tags: ["Field Quality", "OTA", "KI-Insights", "KPI-Dashboards"],
        bullets: [
          "Konzeption eines KI-gestützten Quality Portals für das QM-Team, das CEC- und REC-Kundenfälle in Erkenntnisse übersetzt: automatische Mehrfach-Kategorisierung, Übersetzung, Top-Issue-Trends und KPI-Dashboards.",
          "Entwurf von Frühwarnungen bei plötzlich steigenden Fallzahlen zu einem Thema sowie KI-erstellter 5W2H-Evidenzpakete für schnellere und vollständigere Eskalationen an das HQ.",
          "Entwicklung einer lauffähigen MVP-Demo und Einbringung als IT-Business-Requirement in die Planung für 2027.",
          "Konzept zur Automatisierung des EU-Teilerückversands, von Sendungsbuchung und Labelerstellung bis zur Händlerinformation und Statusverfolgung.",
          "Steuerung und Optimierung etablierter Field-Quality-Prozesse inklusive Reklamationsmanagement, Feldperformance und Fehleranalyse über Regionen hinweg.",
          "Verantwortung für Claiming-Kanäle, insbesondere CEC-Inputs, inklusive Bewertung, Klassifikation und Rückkopplung in das Field-Quality-System.",
          "Cross-funktionale Zusammenarbeit mit Teams in Europa, China und weiteren Regionen zur Abstimmung globaler Qualitätsstandards für Hardware und Software.",
          "Verantwortung für Software-, App- und OTA-Qualität inklusive früher Fehlererkennung, Eskalationsmanagement und wirksamer Gegenmaßnahmen.",
          "Nutzung datengetriebener und KI-gestützter Analysen für Trendmonitoring, KPI-Steuerung und proaktive Risikominimierung.",
          "Unterstützung von Modellanläufen und digitalen Feature-Rollouts sowie Vertretung der europäischen Field-Quality-Perspektive in globalen Gremien."
        ]
      },
      {
        title: "Technical Support Specialist Consultant",
        company: "smart Europe GmbH",
        place: "Leinfelden-Echterdingen",
        period: "Feb. 2024 – heute",
        tags: ["OTA-Betrieb", "2nd-Level-Support", "VPC"],
        bullets: [
          "Steuerung von OTA-Software-Updates in Europa inklusive Monitoring und Reporting.",
          "2nd-Level-Support für OTA-Probleme sowie Umsetzung von Prozessverbesserungen und Change Requests.",
          "Erstellung von Wissensartikeln und Q&As zur Verbesserung der Support-Readiness.",
          "Unterstützung beim Aufbau eines neuen Vehicle Preparation Centers für OTA-PDI in Antwerpen.",
          "Training von Teams und operative Betreuung von Diagnose-, 4G- und OTA-Aktivierungen für zwei VPCs."
        ]
      },
      {
        title: "AI Specialist",
        company: "BXL digital GmbH",
        place: "Frankfurt am Main",
        period: "Feb. 2023 – heute",
        tags: ["GPT", "Computer Vision", "Empfehlungssysteme"],
        bullets: [
          "Entwicklung einer KI-gestützten Apple-Vision-Pro-Anwendung für Menschen mit Hör- und Sprachbarrieren.",
          "Einführung ML-basierter Bildklassifikation und Empfehlungsfunktionen in einer Schmuck-App.",
          "Umsetzung eines KI-basierten Web-Scrapers zur Automatisierung der Datenerhebung.",
          "Entwicklung der GPT-basierten Hunde-Empfehlungslösung FindAdog.",
          "Forschung und Implementierung eines ML-basierten Flotten- und Nachfrageprognosemodells."
        ]
      },
      {
        title: "Technical Project Manager Consultant",
        company: "smart Europe GmbH",
        place: "Leinfelden-Echterdingen",
        period: "Feb. 2023 – Feb. 2024",
        tags: ["IT-Delivery", "PMO", "Release-Management"],
        bullets: [
          "Koordination von Development Leads, Delivery Leads und Release Managern für IT-Meilensteine.",
          "Priorisierung von Umfang und Zeitplänen entlang strategischer Ziele.",
          "Cross-funktionale Abstimmung mit PMO-Teams inklusive Business Testing.",
          "Zentrale Kommunikationsschnittstelle zwischen PMO, IT und Management."
        ]
      },
      {
        title: "Werkstudent",
        company: "Mercedes-Benz",
        place: "Rastatt",
        period: "März 2020 – März 2021",
        tags: ["Papierlose Fabrik", "IT-Support"],
        bullets: [
          "Mitarbeit am Betriebshandbuch der papierlosen Fabrik inklusive Netzwerk- und Inventardokumentation.",
          "Analyse und Vergleich von Ticketing-Systemen für Prozessanforderungen.",
          "Koordination mit Lieferanten und First-Level-IT-Support für Produktionsendgeräte."
        ]
      },
      {
        title: "Praktika",
        company: "Mercedes-Benz / Siemens AG",
        place: "Rastatt, Aguascalientes, Hambach, Karlsruhe",
        period: "Apr. 2018 – Feb. 2020",
        tags: ["Smart Glasses", "KPI-Konzepte"],
        bullets: [
          "Unterstützung bei KPI- und Kommunikationskonzepten für IT-Arbeitspakete der papierlosen Fabrik.",
          "Identifikation neuer Softwareanforderungen und Hardwaretests (u. a. Smart Glasses).",
          "Praxisnahe Grundausbildung in Mechanik, Metallbearbeitung und Elektrotechnik bei der Siemens AG."
        ]
      }
    ],
    projects: [
      {
        title: "KI Quality Portal für Kundenfälle",
        meta: "Konzept und MVP für das QM bei smart Europe",
        bullets: ["Übersetzt CEC- und REC-Kundenfälle in Erkenntnisse: KI-Kategorisierung, Übersetzung, Trend-Dashboards, Frühwarnungen und fertige 5W2H-Eskalationspakete."]
      },
      {
        title: "Apple Vision Pro Accessibility App",
        meta: "GPT-gestützte Spracherkennung, Untertitel und Sprachausgabe",
        bullets: ["Entwickelt für Menschen mit Hör- und Sprachbarrieren."]
      },
      {
        title: "FindAdog Empfehlungssystem",
        meta: "GPT-basiertes Empfehlungsprodukt",
        link: "https://findadog.de/",
        bullets: ["Personalisierte Vorschläge zur Steigerung der Nutzerbindung."]
      },
      {
        title: "Fleet Demand Prediction",
        meta: "ML-basiertes Prognose- und Planungsmodell",
        bullets: ["Bessere Transparenz für die operative Planung."]
      },
      {
        title: "KI-Datenerhebung",
        meta: "KI-Web-Scraper und Datenpipeline",
        bullets: ["Weniger manueller Aufwand und schnellere Auswertungen."]
      }
    ],
    education: [
      { degree: "Bachelor Mechatronik", school: "Hochschule Karlsruhe, Technik und Wirtschaft", period: "2018 – 2023", grade: "Gesamtnote 2,5" },
      { degree: "Studienkolleg", school: "Hochschule Wismar", grade: "Note 1,3" },
      { degree: "Schulabschluss", school: "Police D.A.V. Public School, Jalandhar (Indien)", grade: "89 %" }
    ],
    skillGroups: [
      { name: "Qualität", items: ["Field Quality Management", "Gewährleistungs- und Claiming-Kanäle (CEC)", "Ursachenanalyse (8D, DMAIC, FMEA)", "Business-Intelligence-Dashboards"] },
      { name: "KI & Daten", items: ["Python (ML, Datenanalyse)", "TensorFlow", "PyTorch", "scikit-learn", "OpenAI APIs"] },
      { name: "Engineering", items: ["C++", "MATLAB", "Ansys", "LT-Spice", "Keil", "SPS"] },
      { name: "Zusammenarbeit", items: ["Confluence", "Jira", "MS Office"] }
    ],
    languages: [
      { name: "Englisch", level: "C1" },
      { name: "Deutsch", level: "C1" },
      { name: "Hindi", level: "C1" },
      { name: "Punjabi", level: "C1" }
    ],
    personal: [
      "Geburtsdatum: 02.04.1996",
      "Geburtsort: Basti Bawa Khel, Indien",
      "Staatsangehörigkeit: Indisch",
      "Schwimmen: 2 nationale Rekorde, rund 200 Medaillen",
      "Hobbys: Reisen, Fitness"
    ]
  }
};
