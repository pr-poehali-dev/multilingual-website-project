import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const translations = {
  ru: {
    home: 'Главная',
    news: 'Новости',
    imagePrompts: 'Промпты для картинок',
    videoPrompts: 'Промпты для видео',
    chatbot: 'Чат-бот',
    hero: {
      title: 'Создавай с помощью ИИ',
      subtitle: 'Генерируй изображения, видео и получай помощь от нейросетей нового поколения',
      cta: 'Начать создавать'
    },
    sections: {
      news: { title: 'Свежие новости ИИ', desc: 'Последние обновления в мире нейросетей' },
      images: { title: 'Популярные промпты', desc: 'Лучшие промпты для генерации изображений' },
      videos: { title: 'Видео промпты', desc: 'Создавай потрясающие видео с ИИ' },
      chatbot: { title: 'GPT-4 Чат-бот', desc: 'Универсальный ассистент для любых задач' }
    }
  },
  en: {
    home: 'Home',
    news: 'News',
    imagePrompts: 'Image Prompts',
    videoPrompts: 'Video Prompts',
    chatbot: 'Chatbot',
    hero: {
      title: 'Create with AI',
      subtitle: 'Generate images, videos and get help from next-gen neural networks',
      cta: 'Start Creating'
    },
    sections: {
      news: { title: 'Latest AI News', desc: 'Recent updates from the world of neural networks' },
      images: { title: 'Popular Prompts', desc: 'Best prompts for image generation' },
      videos: { title: 'Video Prompts', desc: 'Create stunning videos with AI' },
      chatbot: { title: 'GPT-4 Chatbot', desc: 'Universal assistant for any task' }
    }
  },
  zh: {
    home: '主页',
    news: '新闻',
    imagePrompts: '图像提示',
    videoPrompts: '视频提示',
    chatbot: '聊天机器人',
    hero: {
      title: '用AI创造',
      subtitle: '生成图像、视频并获得新一代神经网络的帮助',
      cta: '开始创建'
    },
    sections: {
      news: { title: '最新AI新闻', desc: '神经网络世界的最新更新' },
      images: { title: '热门提示', desc: '图像生成的最佳提示' },
      videos: { title: '视频提示', desc: '用AI创建令人惊叹的视频' },
      chatbot: { title: 'GPT-4聊天机器人', desc: '适用于任何任务的通用助手' }
    }
  },
  ja: {
    home: 'ホーム',
    news: 'ニュース',
    imagePrompts: '画像プロンプト',
    videoPrompts: '動画プロンプト',
    chatbot: 'チャットボット',
    hero: {
      title: 'AIで作成',
      subtitle: '次世代ニューラルネットワークで画像、動画を生成',
      cta: '作成を開始'
    },
    sections: {
      news: { title: '最新AIニュース', desc: 'ニューラルネットワークの世界からの最新情報' },
      images: { title: '人気プロンプト', desc: '画像生成のための最高のプロンプト' },
      videos: { title: '動画プロンプト', desc: 'AIで素晴らしい動画を作成' },
      chatbot: { title: 'GPT-4チャットボット', desc: 'あらゆるタスクに対応するユニバーサルアシスタント' }
    }
  },
  ko: {
    home: '홈',
    news: '뉴스',
    imagePrompts: '이미지 프롬프트',
    videoPrompts: '비디오 프롬프트',
    chatbot: '챗봇',
    hero: {
      title: 'AI로 창조하기',
      subtitle: '차세대 신경망으로 이미지, 비디오 생성 및 도움 받기',
      cta: '만들기 시작'
    },
    sections: {
      news: { title: '최신 AI 뉴스', desc: '신경망 세계의 최신 업데이트' },
      images: { title: '인기 프롬프트', desc: '이미지 생성을 위한 최고의 프롬프트' },
      videos: { title: '비디오 프롬프트', desc: 'AI로 놀라운 비디오 만들기' },
      chatbot: { title: 'GPT-4 챗봇', desc: '모든 작업을 위한 범용 어시스턴트' }
    }
  },
  hi: {
    home: 'होम',
    news: 'समाचार',
    imagePrompts: 'छवि प्रॉम्प्ट',
    videoPrompts: 'वीडियो प्रॉम्प्ट',
    chatbot: 'चैटबॉट',
    hero: {
      title: 'AI के साथ बनाएं',
      subtitle: 'अगली पीढ़ी के न्यूरल नेटवर्क से छवियां, वीडियो बनाएं और मदद पाएं',
      cta: 'बनाना शुरू करें'
    },
    sections: {
      news: { title: 'नवीनतम AI समाचार', desc: 'न्यूरल नेटवर्क की दुनिया से ताज़ा अपडेट' },
      images: { title: 'लोकप्रिय प्रॉम्प्ट', desc: 'छवि निर्माण के लिए सर्वश्रेष्ठ प्रॉम्प्ट' },
      videos: { title: 'वीडियो प्रॉम्प्ट', desc: 'AI के साथ शानदार वीडियो बनाएं' },
      chatbot: { title: 'GPT-4 चैटबॉट', desc: 'किसी भी कार्य के लिए सार्वभौमिक सहायक' }
    }
  },
  fr: {
    home: 'Accueil',
    news: 'Actualités',
    imagePrompts: 'Prompts images',
    videoPrompts: 'Prompts vidéos',
    chatbot: 'Chatbot',
    hero: {
      title: 'Créez avec l\'IA',
      subtitle: 'Générez des images, vidéos et obtenez de l\'aide des réseaux neuronaux nouvelle génération',
      cta: 'Commencer à créer'
    },
    sections: {
      news: { title: 'Dernières nouvelles IA', desc: 'Mises à jour récentes du monde des réseaux neuronaux' },
      images: { title: 'Prompts populaires', desc: 'Meilleurs prompts pour la génération d\'images' },
      videos: { title: 'Prompts vidéo', desc: 'Créez des vidéos époustouflantes avec l\'IA' },
      chatbot: { title: 'Chatbot GPT-4', desc: 'Assistant universel pour toute tâche' }
    }
  },
  de: {
    home: 'Startseite',
    news: 'Nachrichten',
    imagePrompts: 'Bild-Prompts',
    videoPrompts: 'Video-Prompts',
    chatbot: 'Chatbot',
    hero: {
      title: 'Erschaffe mit KI',
      subtitle: 'Generiere Bilder, Videos und erhalte Hilfe von neuronalen Netzwerken der nächsten Generation',
      cta: 'Jetzt erstellen'
    },
    sections: {
      news: { title: 'Neueste KI-Nachrichten', desc: 'Aktuelle Updates aus der Welt der neuronalen Netzwerke' },
      images: { title: 'Beliebte Prompts', desc: 'Beste Prompts für Bildgenerierung' },
      videos: { title: 'Video-Prompts', desc: 'Erstelle atemberaubende Videos mit KI' },
      chatbot: { title: 'GPT-4 Chatbot', desc: 'Universeller Assistent für jede Aufgabe' }
    }
  },
  es: {
    home: 'Inicio',
    news: 'Noticias',
    imagePrompts: 'Prompts de imágenes',
    videoPrompts: 'Prompts de video',
    chatbot: 'Chatbot',
    hero: {
      title: 'Crea con IA',
      subtitle: 'Genera imágenes, videos y obtén ayuda de redes neuronales de próxima generación',
      cta: 'Empezar a crear'
    },
    sections: {
      news: { title: 'Últimas noticias de IA', desc: 'Actualizaciones recientes del mundo de las redes neuronales' },
      images: { title: 'Prompts populares', desc: 'Mejores prompts para generación de imágenes' },
      videos: { title: 'Prompts de video', desc: 'Crea videos impresionantes con IA' },
      chatbot: { title: 'Chatbot GPT-4', desc: 'Asistente universal para cualquier tarea' }
    }
  },
  pt: {
    home: 'Início',
    news: 'Notícias',
    imagePrompts: 'Prompts de imagens',
    videoPrompts: 'Prompts de vídeo',
    chatbot: 'Chatbot',
    hero: {
      title: 'Crie com IA',
      subtitle: 'Gere imagens, vídeos e obtenha ajuda de redes neurais de próxima geração',
      cta: 'Começar a criar'
    },
    sections: {
      news: { title: 'Últimas notícias de IA', desc: 'Atualizações recentes do mundo das redes neurais' },
      images: { title: 'Prompts populares', desc: 'Melhores prompts para geração de imagens' },
      videos: { title: 'Prompts de vídeo', desc: 'Crie vídeos incríveis com IA' },
      chatbot: { title: 'Chatbot GPT-4', desc: 'Assistente universal para qualquer tarefa' }
    }
  }
};

type Language = keyof typeof translations;

const Index = () => {
  const [lang, setLang] = useState<Language>('ru');
  const [activeSection, setActiveSection] = useState('home');
  const t = translations[lang];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' }
  ];

  const menuItems = [
    { id: 'home', label: t.home, icon: 'Home' },
    { id: 'news', label: t.news, icon: 'Newspaper' },
    { id: 'image-prompts', label: t.imagePrompts, icon: 'Image' },
    { id: 'video-prompts', label: t.videoPrompts, icon: 'Video' },
    { id: 'chatbot', label: t.chatbot, icon: 'MessageSquare' }
  ];

  const galleryItems = [
    { id: 1, prompt: 'Cyberpunk city at sunset with neon lights', category: 'image', likes: 342 },
    { id: 2, prompt: 'Mystical forest with glowing mushrooms', category: 'image', likes: 289 },
    { id: 3, prompt: 'Futuristic space station orbiting earth', category: 'image', likes: 456 },
    { id: 4, prompt: 'Epic dragon flying over mountains', category: 'video', likes: 512 },
    { id: 5, prompt: 'Northern lights dancing over snowy landscape', category: 'video', likes: 398 },
    { id: 6, prompt: 'Abstract geometric shapes morphing', category: 'video', likes: 267 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-purple via-neon-pink to-neon-orange animate-gradient-shift bg-200 flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent">
                AI Creative Hub
              </h1>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2 transition-all hover:scale-105"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="px-3 py-2 rounded-lg bg-card border border-border text-sm cursor-pointer hover:border-primary transition-colors"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-pink/20 to-neon-orange/20 animate-gradient-shift bg-200" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 text-sm px-4 py-2 bg-neon-purple/20 border-neon-purple text-neon-purple hover:bg-neon-purple/30">
                ✨ Powered by GPT-4 & Midjourney
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                {t.hero.title}
                <span className="block bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent animate-gradient-shift bg-200">
                  {lang === 'ru' ? 'Без Границ' : lang === 'en' ? 'Without Limits' : lang === 'zh' ? '无限可能' : lang === 'ja' ? '限界なし' : 'Sin Límites'}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t.hero.subtitle}
              </p>
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink hover:shadow-2xl hover:shadow-neon-purple/50 transition-all hover:scale-105">
                {t.hero.cta}
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <Card className="p-8 border-2 border-border/50 hover:border-neon-purple/50 transition-all hover:shadow-xl hover:shadow-neon-purple/20 hover:scale-105 duration-300 bg-gradient-to-br from-card to-muted rounded-3xl animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Newspaper" size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{t.sections.news.title}</h3>
                    <p className="text-muted-foreground">{t.sections.news.desc}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-border/50 hover:border-neon-pink/50 transition-all hover:shadow-xl hover:shadow-neon-pink/20 hover:scale-105 duration-300 bg-gradient-to-br from-card to-muted rounded-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-pink to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageSquare" size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{t.sections.chatbot.title}</h3>
                    <p className="text-muted-foreground">{t.sections.chatbot.desc}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mb-12 text-center animate-fade-in">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent">
                {t.sections.images.title}
              </h3>
              <p className="text-muted-foreground text-lg">{t.sections.images.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden border-2 border-border/50 hover:border-neon-purple/50 transition-all hover:shadow-2xl hover:shadow-neon-purple/30 hover:scale-105 duration-500 rounded-3xl bg-card animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-neon-purple/20 via-neon-pink/20 to-neon-orange/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/40 via-neon-pink/40 to-neon-blue/40 animate-gradient-shift bg-200 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        name={item.category === 'image' ? 'Image' : 'Video'}
                        size={48}
                        className="text-white/60 group-hover:text-white/80 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {item.category === 'image' ? '🖼️ Image' : '🎬 Video'}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                        <Icon name="Heart" size={16} className="text-neon-pink" />
                        {item.likes}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/90 line-clamp-2">{item.prompt}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-muted/50 to-background">
          <div className="container mx-auto text-center animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold mb-6">
                {lang === 'ru' ? 'Готовы начать творить?' : lang === 'en' ? 'Ready to Start Creating?' : lang === 'zh' ? '准备开始创作？' : lang === 'ja' ? '作成を始める準備はできましたか？' : '¿Listo para empezar a crear?'}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {lang === 'ru' ? 'Присоединяйтесь к тысячам креаторов, использующих ИИ для воплощения своих идей' : lang === 'en' ? 'Join thousands of creators using AI to bring their ideas to life' : 'Join our creative community'}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink hover:shadow-xl">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  {lang === 'ru' ? 'Регистрация' : 'Sign Up'}
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl border-2">
                  <Icon name="Play" size={20} className="mr-2" />
                  {lang === 'ru' ? 'Смотреть демо' : 'Watch Demo'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-12 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-lg">AI Creative Hub</h4>
              <p className="text-sm text-muted-foreground">
                {lang === 'ru' ? 'Платформа для создания контента с помощью ИИ' : 'AI-powered content creation platform'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{lang === 'ru' ? 'Разделы' : 'Sections'}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a href="#" className="hover:text-foreground transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{lang === 'ru' ? 'Поддержка' : 'Support'}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">{lang === 'ru' ? 'Помощь' : 'Help'}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{lang === 'ru' ? 'Документация' : 'Documentation'}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{lang === 'ru' ? 'Контакты' : 'Contact'}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{lang === 'ru' ? 'Социальные сети' : 'Social'}</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-xl hover:border-neon-purple hover:text-neon-purple">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-xl hover:border-neon-pink hover:text-neon-pink">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-xl hover:border-neon-blue hover:text-neon-blue">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50">
            © 2026 AI Creative Hub. {lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;