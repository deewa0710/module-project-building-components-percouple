function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
   const nav = document.createElement('nav')
    links.forEach(link => {
      let a = document.createElement('a')
      a.textContent = link.textContent
      a.title = link.title
      a.href = link.href
      nav.appendChild(a)
    }) 
    return nav //document.createElement('nav')
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const div = document.createElement('div')
    div.classList.add('learner-card')

    const pName = document.createElement('p')
    pName.textContent = learner.fullName
    const pId = document.createElement('p')
    pId.textContent = `Learner ID: ${learner.id}`
    const pDOB = document.createElement('p')
    pDOB.textContent = `Date of Birth: ${learner.dateOfBirth}`
    const pFLang = document.createElement('p')
    const fLang = languages.find(lang => lang.id === learner.favLanguage)
    pFLang.textContent = `Favorite Language: ${fLang.name}`

    div.appendChild(pName)
    div.appendChild(pId)
    div.appendChild(pDOB)
    div.appendChild(pFLang)

    div.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card'). forEach(div => {
        div.classList.remove('active')
      })
      div.classList.add('active')
    })
    return div
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
  learners.forEach(learner => {
    const learnerCard = buildLearnerCard(learner, languages)
    document.querySelector('section').appendChild(learnerCard)
    })
    learners.forEach(learner => {
      let p = document.createElement('p')
      p.fullName = learner.fullName
      p.id = learner.id
      p.dateOfBirth = learner.dateOfBirth
      p.favLanguage = learner.favLanguage
      return learnerCard
    }) 
  }
  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer')

    const companyInfo = document.createElement('div')
    companyInfo.classList.add('company-info')
    const companyName = document.createElement('p')
    companyName.classList.add('company-name')
    companyName.textContent = footerData.companyName
    const companyAddress = document.createElement('p')
    companyAddress.classList.add('address')
    companyAddress.textContent = footerData.address
    const contactEmail = document.createElement('p')
    contactEmail.classList.add('contact-email')
    contactEmail.innerHTML = `Email: <a href"mailto:${footerData.contactEmail}"> ${footerData.contactEmail}`

    const socialMedia = document.createElement('div')
    socialMedia.classList.add('social-media')
    for (let app in footerData.socialMedia) {
      let link = document.createElement('a')
      link.href = footerData.socialMedia[app]
      link.textContent = app.charAt(0).toUpperCase() + app.slice(1)
      socialMedia.appendChild(link)
    }

    companyInfo.appendChild(companyName)
    companyInfo.appendChild(companyAddress)
    companyInfo.appendChild(contactEmail)

    let currentYear = new Date().getFullYear()
    let copyright = document.createElement('div')
    copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`
    
    footer.appendChild(companyInfo)
    footer.appendChild(socialMedia)
    footer.appendChild(copyright)
    return footer
    //return document.createElement('footer')
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  document.addEventListener('click', evt => {
    if (evt.target === document.querySelector('section')) {
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(div => div.classList.remove('active'))
    }
  })

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()