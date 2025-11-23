export const environment = {
    production: true,
    tolgeeApiUrl: 'https://app.tolgee.io',
    tolgeeApiKey: 'tgpak_ge3denrtl42w63lnmuzxc4jvmfvdgzruni4womlenvug2zttgbya',
    API_CERTIFICATIONS: "https://2e1ioub9.api.sanity.io/v2025-11-23/data/query/production?query=*%5B_type+%3D%3D+%22certification%22%5D%7B%0A++id%2C%0A++title%2C%0A++issuingBody%2C%0A++date%2C%0A++%22image%22%3A+image.asset-%3Eurl%2C%0A%7D&perspective=drafts",
    API_PROJECTS: "https://2e1ioub9.api.sanity.io/v2025-11-23/data/query/production?query=*%5B_type+%3D%3D+%22project%22%5D%7B%0A++title%2C%0A++%22image%22%3A+image.asset-%3Eurl%2C%0A++description%2C%0A++%22technologies%22%3A+technologies%5B%5D-%3E%7B%0A++++name%2C%0A++%7D%2C%0A++++%22categories%22%3A+categories%5B%5D-%3E%7B%0A++++name%2C%0A++%7D%2C%0A%0A++githubLink%2C%0A%7D&perspective=drafts",
    API_HOME_PAGE_PROJECTS: "https://2e1ioub9.api.sanity.io/v2025-11-23/data/query/production?query=*%5B_type+%3D%3D+%22homePageProject%22%5D%7B%0A++id%2C%0A++name%2C%0A++description%2C%0A++%22image%22%3A+image.asset-%3Eurl%2C%0A++githubLink%2C%0A%7D&perspective=drafts",
    API_SOCIALS: "https://2e1ioub9.api.sanity.io/v2025-11-23/data/query/production?query=*%5B_type+%3D%3D+%22socialLink%22%5D%7B%0A++name%2C%0A++++url%0A%7D&perspective=drafts"
  };