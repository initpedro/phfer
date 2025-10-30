"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    "nav.inicio": "Início",
    "nav.contato": "Contato",
    
    // Hero
    "hero.title1": "Especialista em",
    "hero.title2": "Desenvolver",
    "hero.title3": "para o seu negócio!",
    "hero.description": "Grandes ideias ganham asas quando criadas por devs criativos e dedicados.",
    "hero.button1": "Conheça meu trabalho",
    "hero.button2": "Entre em contato",
    "hero.scroll": "Desça",
    
    // CTA Parallax
    "cta.projects": "+10 Projetos",
    "cta.satisfaction": "100% Satisfação",
    "cta.experience": "+2 Anos Experiência",
    "cta.button": "Contate Agora",
    "cta.next_level": "Próximo Nível",
    "cta.ready_to_level_up": "Pronto para elevar seu",
    "cta.ready_to_level_up_question": "negócio ao",
    "cta.ready_to_level_up_answer": "próximo nível?",
    "cta.transform_ideas": "Vamos transformar suas ideias em soluções digitais que geram resultados reais. Com estratégia, criatividade e tecnologia, criamos experiências que marcam diferença.",
    "cta.open_whatsapp": "Abrir WhatsApp",
    
    // About Section
    "about.badge": "Minha História",
    "about.title": "Quem é o",
    "about.title2": "Pedro?",
    "about.description": "Uma jornada de fascinação, aprendizado e transformação através da tecnologia",
    "about.final": "A tecnologia sempre foi o que me move — e agora posso dizer que estou trilhando o caminho que sempre quis, desenvolvendo soluções que realmente fazem a diferença.",
    "about.final_message": "A tecnologia sempre foi o que me move — e agora posso dizer que estou trilhando o caminho que sempre quis, desenvolvendo soluções que realmente fazem a diferença.",
    
    // Timeline
    "timeline.beginning.title": "O Começo",
    "timeline.beginning.description": "Fascinado por tecnologia, mergulhei nesse mundo aos poucos — jogando online, participando de fóruns. Aprendi tudo naturalmente, sem cursos formais. Todos achavam que tinha feito curso de informática!",
    "timeline.habbo.year": "2015-2023",
    "timeline.habbo.title": "Habbo Hotel",
    "timeline.habbo.description": "As polícias virtuais foram meu laboratório. Trabalhei de forma remota e voluntária por anos, montando cursos, criando documentos, mantendo fóruns e desenvolvendo sistemas em BBCode. Aprendi liderança, comunicação e como a tecnologia organiza experiências humanas.",
    "timeline.fullstack.year": "2023+",
    "timeline.fullstack.title": "Full-Stack & Universidade",
    "timeline.fullstack.description": "Concluí a formação Full-Stack da Rocketseat e estou cursando Sistemas de Informação na Universidade de Uberaba. Aprendizado contínuo em desenvolvimento real.",
    "timeline.rakha.year": "Agora",
    "timeline.rakha.title": "Rakha Tecnologia",
    "timeline.rakha.description": "Atuo como Desenvolvedor Júnior, aplicando conhecimentos em projetos reais, aprendendo com profissionais experientes e evoluindo todos os dias. Tenho 20 anos e estou trilhando o caminho que sempre quis.",
    
    // Skills Section
    "skills.badge": "Minhas Competências",
    "skills.title": "Tecnologias",
    "skills.title2": "Ferramentas",
    "skills.description": "Uma seleção de tecnologias que uso para criar experiências digitais incríveis",
    "skills.all": "Todas as Tecnologias",
    "skills.frontend": "Front-end",
    "skills.backend": "Back-end",
    "skills.tools": "Ferramentas & Deploy",
    "skills.category.front": "Frontend",
    "skills.category.back": "Backend",
    "skills.category.other": "Ferramentas",
    "skills.no_skills_found": "Nenhuma habilidade encontrada.",
    "skills.see_more": "Ver Mais",
    "skills.see_less": "Ver Menos",
    
    // Skill Descriptions
    "skill.html5": "Estrutura semântica e acessível",
    "skill.css3": "Estilos avançados e responsivos",
    "skill.sass": "Pré-processador CSS moderno",
    "skill.tailwindcss": "Framework CSS utilitário",
    "skill.javascript": "Lógica dinâmica do frontend",
    "skill.typescript": "JavaScript com tipagem estática",
    "skill.react": "Biblioteca para interfaces",
    "skill.nextjs": "Framework React full-stack",
    "skill.nodejs": "Runtime JavaScript no servidor",
    "skill.express": "Framework web minimalista",
    "skill.csharp": "Linguagem orientada a objetos",
    "skill.dotnet": "Plataforma .NET Microsoft",
    "skill.python": "Linguagem versátil e clara",
    "skill.java": "Linguagem orientada a objetos",
    "skill.api": "Integração entre sistemas",
    "skill.apis": "Integração entre sistemas",
    "skill.postgresql": "Banco de dados relacional",
    "skill.mysql": "Banco de dados SQL popular",
    "skill.mongodb": "Banco de dados NoSQL",
    "skill.git": "Controle de versão distribuído",
    "skill.docker": "Containerização de aplicações",
    "skill.figma": "Ferramenta de design colaborativo",
    "skill.powerbi": "Inteligência de negócios visual",
    "skill.netlify": "Deploy e hospedagem web",
    
    // Projects Section
    "projects.badge": "Meus Trabalhos",
    "projects.title": "Confira os meus",
    "projects.title2": "projetos",
    "projects.description": "Uma seleção de projetos que demonstram minha experiência e criatividade",
    "projects.details": "Ver Detalhes",
    "projects.github": "Confira todos os meus projetos no GitHub",
    
    // Project 1
    "project1.title": "Portfólio Pessoal",
    "project1.description": "Meu portfólio pessoal, desenvolvido como uma vitrine do meu trabalho e habilidades como desenvolvedor.",
    "project1.fullDescription": "Meu portfólio pessoal, desenvolvido como uma vitrine do meu trabalho e habilidades como desenvolvedor. Construído com tecnologias modernas garantindo performance, responsividade e facilidade de manutenção. Aqui é possível conhecer meus projetos, minhas experiências e como transformo ideias em soluções digitais.",
    
    // Project 2
    "project2.title": "Loja Virtual Mimo",
    "project2.description": "Loja virtual criada para proporcionar uma experiência de compra fluida e agradável.",
    "project2.fullDescription": "Loja virtual criada para proporcionar uma experiência de compra fluida e agradável. Com tecnologias modernas, o projeto combina funcionalidade e estética, garantindo que cada produto seja acessível e que o processo de compra seja simples e intuitivo.",
    
    // Project 3
    "project3.title": "Jogo de Xadrez",
    "project3.description": "Jogo de Xadrez desenvolvido para terminal em C#, focado em lógica de programação.",
    "project3.fullDescription": "Jogo de Xadrez desenvolvido para terminal em C#, focado em lógica de programação, estruturas de dados e aplicação de metodologias ágeis. Simula um ambiente completo de xadrez, permitindo que o jogador interaja diretamente pelo terminal.",
    
    // Project Modal
    "project_modal.technologies": "Tecnologias",
    "project_modal.about_project": "Sobre o Projeto",
    "project_modal.view_demo": "Visualizar Demo",
    "project_modal.close": "Fechar",
    
    // Experience Section
    "experience.badge": "Meu Percurso",
    "experience.title": "Experiência",
    "experience.title2": "profissional",
    "experience.description": "Trajetória profissional com foco em desenvolvimento web e soluções inovadoras",
    "experience.resume": "Veja meu Currículo",
    
    // Experience Entries
    "exp1.title": "Desenvolvedor de Software Júnior",
    "exp1.company": "Rakha Tecnologia",
    "exp1.period": "2025 - Presente",
    "exp1.description": "Desenvolvimento de aplicações web, sistemas na plataforma de desenvolvimento Mitra, conexão com bancos de dados, consultoria clientes Sankhya, etc. Participação em projetos de grande escala com foco em performance e experiência do usuário.",
    "exp1.status": "Atual",
    
    "exp2.title": "Assistente Administrativo",
    "exp2.company": "Usina Uberaba",
    "exp2.period": "2024 - 2025",
    "exp2.description": "Gestão de processos administrativos e suporte técnico. Desenvolvimento de soluções internas para automação de tarefas.",
    "exp2.status": "Anterior",
    
    "exp3.title": "Técnico Freelancer",
    "exp3.company": "Autônomo",
    "exp3.period": "2015 - Presente",
    "exp3.description": "Prestação de serviços de desenvolvimento web e manutenção de sistemas. Atendimento a diversos clientes com soluções personalizadas.",
    "exp3.status": "Anterior",
    
    // Parallax Section
    "parallax.badge": "✨ Transformação Digital",
    "parallax.title": "Transformando ideias em",
    "parallax.title2": "realidade",
    "parallax.description": "Com tecnologia de ponta e criatividade sem limites, criamos soluções digitais que não apenas funcionam, mas que inspiram e transformam negócios. Cada projeto é uma oportunidade de deixar sua marca no mundo digital.",
    "parallax.feature1": "Rápido",
    "parallax.feature1_desc": "Entrega ágil e eficiente",
    "parallax.feature2": "Qualidade",
    "parallax.feature2_desc": "Código limpo e moderno",
    "parallax.feature3": "Resultado",
    "parallax.feature3_desc": "Focado em ROI",
    "parallax.button": "Saiba mais",
    
    // Testimonials Section
    "testimonials.badge": "Depoimentos",
    "testimonials.title": "O que",
    "testimonials.title2": "pessoas",
    "testimonials.title3": "dizem sobre mim",
    "testimonials.description": "Feedback de colegas, mentores e clientes que compartilharam experiências comigo",
    
    // Testimonial 1
    "testimonial1.role": "Estagiário",
    "testimonial1.company": "Tiger Cyber Labs",
    "testimonial1.content": "Trabalhar com Pedro em projetos acadêmicos foi incrível. Ele tem um conhecimento profundo em C# e sempre estava disponível para ajudar e compartilhar dicas. Sua dedicação em resolver problemas complexos é inspiradora.",
    
    // Testimonial 2
    "testimonial2.role": "Desenvolvedor Pleno",
    "testimonial2.company": "Tiger Cyber Labs",
    "testimonial2.content": "Pedro é um colega excepcional. Sua capacidade de aprender rapidamente e aplicar boas práticas de desenvolvimento é notável. Compartilhamos muito conhecimento sobre arquitetura e padrões de design em nossos projetos.",
    
    // Testimonial 3
    "testimonial3.role": "Desenvolvedor",
    "testimonial3.company": "Uan",
    "testimonial3.content": "A colaboração com Pedro em trabalhos acadêmicos foi muito produtiva. Ele domina bem tanto frontend quanto backend, sempre contribuindo com soluções criativas e bem estruturadas. Excelente companheiro de desenvolvimento.",
    
    // Testimonial 4
    "testimonial4.role": "Desenvolvedora Freelancer",
    "testimonial4.company": "Autônoma",
    "testimonial4.content": "Pedro é um desenvolvedor muito competente e atencioso. Suas dicas sobre boas práticas em TypeScript e C# foram fundamentais para melhorar minha qualidade de código. Sempre disposto a ajudar e compartilhar experiências.",
    
    // Testimonial 5
    "testimonial5.role": "Farmacêutica",
    "testimonial5.company": "Armazém Drogaria",
    "testimonial5.content": "Pedro foi fundamental para me auxiliar a entender e aprender os sistemas. Sua paciência e dedicação em explicar as funcionalidades de forma clara e objetiva tornaram o processo muito mais fácil. Excelente profissional!",
    
    // FAQ Section
    "faq.badge": "Dúvidas Frequentes",
    "faq.title": "Tem",
    "faq.title2": "dúvidas?",
    "faq.title3": "Relaxa, tenho sua solução!",
    "faq.description": "Aqui estão as respostas para as perguntas mais comuns sobre meus serviços e como trabalho.",
    
    // FAQ Items
    "faq1.question": "Qual é o processo de desenvolvimento?",
    "faq1.answer": "Meu processo inclui: análise de requisitos, prototipagem, desenvolvimento iterativo, testes rigorosos e deploy. Trabalho com metodologia ágil para garantir entrega de qualidade em prazos realistas.",
    
    "faq2.question": "Quanto tempo leva para desenvolver um projeto?",
    "faq2.answer": "O tempo varia conforme a complexidade. Projetos simples podem levar de 2-4 semanas, enquanto projetos mais complexos podem levar de 2-3 meses. Faço uma análise detalhada antes de dar um cronograma preciso.",
    
    "faq3.question": "Você trabalha com projetos de diferentes tamanhos?",
    "faq3.answer": "Sim! Trabalho com desde pequenos projetos pessoais até aplicações web em larga escala. Adapto minha abordagem conforme as necessidades específicas do projeto.",
    
    "faq4.question": "Quais são seus principais stacks tecnológicos?",
    "faq4.answer": "Frontend: React, Next.js, TypeScript, TailwindCSS. Backend: Node.js, Express, PostgreSQL, MongoDB. Também tenho experiência com DevOps, Docker e deploy em nuvem.",
    
    "faq5.question": "Como funciona o suporte após a entrega?",
    "faq5.answer": "Ofereço suporte técnico por 30 dias após a entrega. Além disso, posso ajudar com manutenção contínua, atualizações e melhorias conforme necessário.",
    
    "faq6.question": "Posso ter acesso ao código-fonte?",
    "faq6.answer": "Sim, você receberá acesso completo ao código-fonte e documentação técnica. O código é comentado e bem estruturado para facilitar futuras manutenções.",
    
    // Final CTA Section
    "final.title": "Vamos criar algo",
    "final.title2": "incrível juntos?",
    "final.description": "Tenho certeza de que podemos transformar suas ideias em soluções digitais extraordinárias.",
    "final.cta": "Começar Agora",
    
    // Contact Section
    "contact.badge": "Vamos conversar!",
    "contact.title": "Pronto para começar",
    "contact.title2": "seu projeto?",
    "contact.description": "Entre em contato comigo e vamos transformar suas ideias em realidade",
    "contact.whatsapp": "Abrir WhatsApp",
    "contact.email": "Enviar Email",
    "contact.response_time": "Tempo de Resposta",
    "contact.response_time_value": "Em até 24 horas",
    "contact.location": "Localização",
    "contact.location_value": "Uberlândia, MG",
    "contact.availability": "Disponibilidade",
    "contact.availability_value": "Sempre aberto a projetos",
    
    // Footer
    "footer.description": "Transformando ideias em soluções digitais inovadoras. Especialista em desenvolvimento web moderno com foco em experiência do usuário.",
    "footer.links": "Links Úteis",
    "footer.socials": "Redes Sociais",
    "footer.legal": "Legal",
    "footer.copyright": "© 2025 @initpedro — Todos os direitos reservados.",
    "footer.terms": "Termos de Uso",
    "footer.privacy": "Política de Privacidade",
    "footer.about": "Sobre",
    "footer.projects": "Projetos",
    "footer.footer_cta_description": "Estou pronto para transformar suas ideias em realidade. ✨",
    // Footer CTA Section
    "footer.cta_title": "Pronto para o",
    "footer.cta_title2": "próximo passo?",
  },
  en: {
    // Navigation
    "nav.inicio": "Home",
    "nav.contato": "Contact",
    
    // Hero
    "hero.title1": "Specialist in",
    "hero.title2": "Systems Development",
    "hero.title3": "for your business!",
    "hero.description": "Great ideas take flight when created by creative and dedicated devs.",
    "hero.button1": "Check my work",
    "hero.button2": "Get in touch",
    "hero.scroll": "Scroll",
    
    // CTA Parallax
    "cta.projects": "+10 Projects",
    "cta.satisfaction": "100% Satisfaction",
    "cta.experience": "+2 Years Experience",
    "cta.button": "Contact Now",
    "cta.next_level": "Next Level",
    "cta.ready_to_level_up": "Ready to elevate your",
    "cta.ready_to_level_up_question": "business to the",
    "cta.ready_to_level_up_answer": "next level?",
    "cta.transform_ideas": "Let's transform your ideas into digital solutions that generate real results. With strategy, creativity and technology, we create experiences that make a difference.",
    "cta.open_whatsapp": "Open WhatsApp",
    
    // About Section
    "about.badge": "My Story",
    "about.title": "Who is",
    "about.title2": "Pedro?",
    "about.description": "A journey of fascination, learning and transformation through technology",
    "about.final": "Technology has always been what moves me — and now I can say I'm on the path I've always wanted, developing solutions that really make a difference.",
    "about.final_message": "Technology has always been what moves me — and now I can say I'm on the path I've always wanted, developing solutions that really make a difference.",
    
    // Timeline
    "timeline.beginning.title": "The Beginning",
    "timeline.beginning.description": "Fascinated by technology, I dove into this world gradually — playing online, participating in forums. I learned everything naturally, without formal courses. Everyone thought I had done a computer science course!",
    "timeline.habbo.year": "2015-2023",
    "timeline.habbo.title": "Habbo Hotel",
    "timeline.habbo.description": "Virtual police were my laboratory. I worked remotely and voluntarily for years, creating courses, creating documents, maintaining forums, and developing systems in BBCode. I learned leadership, communication, and how technology organizes human experiences.",
    "timeline.fullstack.year": "2023+",
    "timeline.fullstack.title": "Full-Stack & University",
    "timeline.fullstack.description": "I completed the Full-Stack Rocketseat training and am currently studying Information Systems at the University of Uberaba. Continuous learning in real development.",
    "timeline.rakha.year": "Now",
    "timeline.rakha.title": "Rakha Technology",
    "timeline.rakha.description": "I work as a Junior Developer, applying knowledge in real projects, learning from experienced professionals, and evolving every day. I am 20 years old and am on the path I've always wanted.",
    
    // Skills Section
    "skills.badge": "My Skills",
    "skills.title": "Technologies",
    "skills.title2": "Tools",
    "skills.description": "A selection of technologies I use to create incredible digital experiences",
    "skills.all": "All Technologies",
    "skills.frontend": "Front-end",
    "skills.backend": "Back-end",
    "skills.tools": "Tools & Deploy",
    "skills.category.front": "Frontend",
    "skills.category.back": "Backend",
    "skills.category.other": "Tools",
    "skills.no_skills_found": "No skills found.",
    "skills.see_more": "See More",
    "skills.see_less": "See Less",
    
    // Skill Descriptions
    "skill.html5": "Semantic structure and accessibility",
    "skill.css3": "Advanced and responsive styles",
    "skill.sass": "Modern CSS preprocessor",
    "skill.tailwindcss": "Utility CSS framework",
    "skill.javascript": "Dynamic frontend logic",
    "skill.typescript": "JavaScript with static typing",
    "skill.react": "Library for interfaces",
    "skill.nextjs": "Full-stack React framework",
    "skill.nodejs": "JavaScript runtime on the server",
    "skill.express": "Minimalist web framework",
    "skill.csharp": "Object-oriented language",
    "skill.dotnet": "Microsoft .NET platform",
    "skill.python": "Versatile and clear language",
    "skill.java": "Object-oriented language",
    "skill.api": "System integration",
    "skill.apis": "System integration",
    "skill.postgresql": "Relational database",
    "skill.mysql": "Popular SQL database",
    "skill.mongodb": "NoSQL database",
    "skill.git": "Distributed version control",
    "skill.docker": "Application containerization",
    "skill.figma": "Collaborative design tool",
    "skill.powerbi": "Business intelligence visualization",
    "skill.netlify": "Web deployment and hosting",
    
    // Projects Section
    "projects.badge": "My Work",
    "projects.title": "Check out my",
    "projects.title2": "projects",
    "projects.description": "A selection of projects that demonstrate my experience and creativity",
    "projects.details": "View Details",
    "projects.github": "Check out all my projects on GitHub",
    
    // Project 1
    "project1.title": "Personal Portfolio",
    "project1.description": "My personal portfolio, developed as a showcase of my work and skills as a developer.",
    "project1.fullDescription": "My personal portfolio, developed as a showcase of my work and skills as a developer. Built with modern technologies ensuring performance, responsiveness, and ease of maintenance. Here you can learn about my projects, my experiences, and how I transform ideas into digital solutions.",
    
    // Project 2
    "project2.title": "Virtual Mimo Store",
    "project2.description": "Virtual store created to provide a fluid and pleasant shopping experience.",
    "project2.fullDescription": "Virtual store created to provide a fluid and pleasant shopping experience. With modern technologies, the project combines functionality and aesthetics, ensuring that each product is accessible and that the purchase process is simple and intuitive.",
    
    // Project 3
    "project3.title": "Chess Game",
    "project3.description": "Chess game developed for terminal in C#, focused on programming logic.",
    "project3.fullDescription": "Chess game developed for terminal in C#, focused on programming logic, data structures, and application of agile methodologies. Simulates a complete chess environment, allowing the player to interact directly via the terminal.",
    
    // Project Modal
    "project_modal.technologies": "Technologies",
    "project_modal.about_project": "About the Project",
    "project_modal.view_demo": "View Demo",
    "project_modal.close": "Close",
    
    // Experience Section
    "experience.badge": "My Journey",
    "experience.title": "Professional",
    "experience.title2": "Experience",
    "experience.description": "My professional journey and continuous learning",
    "experience.resume": "View My Resume",
    
    // Experience Entries
    "exp1.title": "Junior Software Developer",
    "exp1.company": "Rakha Technology",
    "exp1.period": "2025 - Present",
    "exp1.description": "Web application development, systems on the Mitra development platform, database connections, Sankhya client consulting, etc. Participation in large-scale projects with focus on performance and user experience.",
    "exp1.status": "Current",
    
    "exp2.title": "Administrative Assistant",
    "exp2.company": "Uberaba Power Plant",
    "exp2.period": "2024 - 2025",
    "exp2.description": "Administrative process management and technical support. Development of internal solutions for automation of tasks.",
    "exp2.status": "Previous",
    
    "exp3.title": "Freelance Technician",
    "exp3.company": "Self-employed",
    "exp3.period": "2015 - Present",
    "exp3.description": "Provision of web development and system maintenance services. Attending various clients with customized solutions.",
    "exp3.status": "Previous",
    
    // Parallax Section
    "parallax.badge": "✨ Digital Transformation",
    "parallax.title": "Transforming ideas into",
    "parallax.title2": "reality",
    "parallax.description": "With cutting-edge technology and limitless creativity, we create digital solutions that not only function but inspire and transform businesses. Each project is an opportunity to leave your mark on the digital world.",
    "parallax.feature1": "Fast",
    "parallax.feature1_desc": "Fast and efficient delivery",
    "parallax.feature2": "Quality",
    "parallax.feature2_desc": "Clean and modern code",
    "parallax.feature3": "Result",
    "parallax.feature3_desc": "Focused on ROI",
    "parallax.button": "Learn More",
    
    // Testimonials Section
    "testimonials.badge": "Testimonials",
    "testimonials.title": "What",
    "testimonials.title2": "people",
    "testimonials.title3": "say about me",
    "testimonials.description": "Feedback from colleagues, mentors, and clients who have shared their experiences with me",
    
    // Testimonial 1
    "testimonial1.role": "Intern",
    "testimonial1.company": "Tiger Cyber Labs",
    "testimonial1.content": "Working with Pedro on academic projects was incredible. He has a deep knowledge of C# and was always available to help and share tips. His dedication to solving complex problems is inspiring.",
    
    // Testimonial 2
    "testimonial2.role": "Senior Developer",
    "testimonial2.company": "Tiger Cyber Labs",
    "testimonial2.content": "Pedro is an exceptional colleague. His ability to learn quickly and apply good development practices is remarkable. We shared a lot of knowledge about architecture and design patterns in our projects.",
    
    // Testimonial 3
    "testimonial3.role": "Developer",
    "testimonial3.company": "Uan",
    "testimonial3.content": "Collaboration with Pedro on academic projects was very productive. He is very good at both frontend and backend, always contributing creative and well-structured solutions. Excellent development partner.",
    
    // Testimonial 4
    "testimonial4.role": "Freelance Developer",
    "testimonial4.company": "Self-employed",
    "testimonial4.content": "Pedro is a very competent and attentive developer. His tips on good practices in TypeScript and C# were fundamental to improve my code quality. Always willing to help and share experiences.",
    
    // Testimonial 5
    "testimonial5.role": "Pharmacist",
    "testimonial5.company": "Armazém Drogaria",
    "testimonial5.content": "Pedro was essential in helping me understand and learn the systems. His patience and dedication in explaining the functionalities in a clear and objective way made the process much easier. Excellent professional!",
    
    // FAQ Section
    "faq.badge": "FAQ",
    "faq.title": "Have any",
    "faq.title2": "questions?",
    "faq.title3": "Relax, I have your solution!",
    "faq.description": "Here are the answers to the most common questions about my services and how I work.",
    
    // FAQ Items
    "faq1.question": "What is the development process?",
    "faq1.answer": "My process includes: requirements analysis, prototyping, iterative development, rigorous testing, and deployment. I work with agile methodology to ensure quality delivery within realistic timelines.",
    
    "faq2.question": "How long does it take to develop a project?",
    "faq2.answer": "The time varies depending on complexity. Simple projects can take 2-4 weeks, while more complex projects can take 2-3 months. I do a detailed analysis before giving a precise schedule.",
    
    "faq3.question": "Do you work on projects of different sizes?",
    "faq3.answer": "Yes! I work with both small personal projects and large web applications. I adapt my approach to the specific needs of each project.",
    
    "faq4.question": "What are your main technological stacks?",
    "faq4.answer": "Frontend: React, Next.js, TypeScript, TailwindCSS. Backend: Node.js, Express, PostgreSQL, MongoDB. I also have experience with DevOps, Docker, and cloud deployment.",
    
    "faq5.question": "How does post-delivery support work?",
    "faq5.answer": "I offer technical support for 30 days after delivery. In addition, I can help with continuous maintenance, updates, and improvements as needed.",
    
    "faq6.question": "Can I have access to the source code?",
    "faq6.answer": "Yes, you will receive full access to the source code and technical documentation. The code is commented and well-structured for easy future maintenance.",
    
    // Final CTA Section
    "final.title": "Let's take your business to the",
    "final.title2": "next level?",
    "final.description": "I'm sure we can turn your ideas into extraordinary digital solutions.",
    "final.cta": "Get Started Now",
    
    // Contact Section
    "contact.badge": "Let's talk!",
    "contact.title": "Ready to start",
    "contact.title2": "your project?",
    "contact.description": "Get in touch with me and let's turn your ideas into reality",
    "contact.whatsapp": "Open WhatsApp",
    "contact.email": "Send Email",
    "contact.response_time": "Response Time",
    "contact.response_time_value": "Up to 24 hours",
    "contact.location": "Location",
    "contact.location_value": "Uberlândia, MG",
    "contact.availability": "Availability",
    "contact.availability_value": "Always open to projects",
    
    // Footer
    "footer.description": "Transforming ideas into innovative digital solutions. Expert in modern web development with a focus on user experience.",
    "footer.links": "Useful Links",
    "footer.socials": "Social Networks",
    "footer.legal": "Legal",
    "footer.copyright": "© 2025 @initpedro — All rights reserved.",
    "footer.terms": "Terms of Use",
    "footer.privacy": "Privacy Policy",
    "footer.about": "About",
    "footer.projects": "Projects",
    "footer.footer_cta_description": "I'm ready to transform your ideas into reality. ✨",
    // Footer CTA Section
    "footer.cta_title": "Ready for the",
    "footer.cta_title2": "next step?",
  },
}

const defaultContextValue: LanguageContextType = {
  language: "pt",
  setLanguage: () => {},
  t: (key: string) => key,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["pt"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    return defaultContextValue
  }
  return context
}
