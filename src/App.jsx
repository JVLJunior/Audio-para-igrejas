import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import FeaturedPosts from './components/FeaturedPosts.jsx'
import Footer from './components/Footer.jsx'
import ArticlePage from './components/ArticlePage.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentArticle, setCurrentArticle] = useState(null)

  const navigateToArticle = (articleId) => {
    setCurrentArticle(articleId)
    setCurrentPage('article')
  }

  const navigateToHome = () => {
    setCurrentPage('home')
    setCurrentArticle(null)
  }

  // Atualizar os componentes para incluir navegação
  const FeaturedPostsWithNavigation = () => {
    const featuredPosts = [
      {
        id: 1,
        articleId: 'fundamentos-som',
        title: 'Entendendo o Som: Conceitos Básicos para Igrejas',
        excerpt: 'Aprenda os fundamentos do som, incluindo frequência, amplitude e timbre, e como estes conceitos se aplicam na prática em ambientes de culto.',
        category: 'Fundamentos',
        readTime: '15 min',
        featured: true
      },
      {
        id: 2,
        articleId: 'microfones',
        title: 'Microfones para Igrejas: Guia Completo de Escolha e Uso',
        excerpt: 'Tudo sobre microfones dinâmicos vs condensadores, aplicações específicas para pastores, cantores e instrumentos, e técnicas de uso correto.',
        category: 'Equipamentos',
        readTime: '20 min',
        featured: true
      },
      {
        id: 3,
        articleId: 'equalizacao',
        title: 'Equalização para Igrejas: Moldando o Som Perfeito',
        excerpt: 'Domine a arte da equalização para obter clareza na voz do pastor, presença nos instrumentos e um som equilibrado em todo o culto.',
        category: 'Técnicas',
        readTime: '18 min',
        featured: true
      }
    ]

    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comece sua jornada com nossos artigos mais populares e fundamentais para qualquer operador de som em igrejas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                onClick={() => navigateToArticle(post.articleId)}
              >
                <div className={`bg-gradient-to-br from-blue-500 to-indigo-600 ${index === 0 ? 'h-64' : 'h-48'} flex items-center justify-center`}>
                  <svg className={`text-white ${index === 0 ? 'h-16 w-16' : 'h-12 w-12'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center ml-auto text-gray-500 text-sm">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className={`font-bold text-gray-900 mb-3 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {post.excerpt}
                  </p>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Ler artigo completo
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center mx-auto">
              Ver Todos os Artigos
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    )
  }

  if (currentPage === 'article') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <ArticlePage articleId={currentArticle} onBack={navigateToHome} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedPostsWithNavigation />
      </main>
      <Footer />
    </div>
  )
}

export default App

