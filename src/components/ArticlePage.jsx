import { useState, useEffect } from 'react'
import { ArrowLeft, Clock, BookOpen, User } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ArticlePage = ({ articleId, onBack }) => {
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  // Simulação de dados dos artigos (em uma aplicação real, isso viria de uma API ou arquivos)
  const articles = {
    'fundamentos-som': {
      id: 'fundamentos-som',
      title: 'Entendendo o Som: Conceitos Básicos para Igrejas',
      category: 'Fundamentos',
      readTime: '15 min',
      author: 'Manus AI',
      date: '2024-06-03',
      excerpt: 'Aprenda os fundamentos do som, incluindo frequência, amplitude e timbre, e como estes conceitos se aplicam na prática em ambientes de culto.',
      content: `
# Entendendo o Som: Conceitos Básicos para Igrejas

O som é a base de toda comunicação em uma igreja. Seja através da pregação da Palavra, do louvor congregacional ou dos momentos de oração, a qualidade do áudio determina se a mensagem chegará com clareza até cada membro da congregação.

## O que é Som?

O som é uma forma de energia que se propaga através de ondas mecânicas no ar. Quando um pastor fala ao microfone, suas cordas vocais fazem o ar vibrar, criando ondas de pressão que se propagam pelo ambiente até chegarem aos ouvidos da congregação.

Para trabalhar efetivamente com áudio em igrejas, precisamos entender três características fundamentais do som: **frequência**, **amplitude** e **timbre**.

## Frequência: Graves, Médios e Agudos

A frequência é medida em Hertz (Hz) e representa o número de ciclos de vibração que ocorrem por segundo. Esta propriedade determina se percebemos um som como grave (baixa frequência) ou agudo (alta frequência).

### Faixas de Frequência

**Frequências Graves (20 Hz - 250 Hz)**: Esta faixa inclui os sons mais profundos que podemos ouvir. Em uma igreja, encontramos essas frequências principalmente no órgão, no baixo elétrico, no bumbo da bateria e nas notas mais graves do piano.

**Frequências Médias (250 Hz - 4.000 Hz)**: Esta é a faixa mais crítica para a comunicação humana. A maior parte da inteligibilidade da fala ocorre nesta região, especialmente entre 1.000 Hz e 4.000 Hz.

**Frequências Agudas (4.000 Hz - 20.000 Hz)**: Os agudos proporcionam clareza, definição e brilho ao som. Incluem os harmônicos superiores dos instrumentos e vozes, os pratos da bateria, e os sons sibilantes da fala.

## Amplitude: O Volume do Som

A amplitude refere-se à intensidade da onda sonora e determina o que percebemos como volume. O volume é medido em decibéis (dB), uma escala logarítmica que reflete como nossos ouvidos percebem as mudanças de intensidade.

### Níveis Adequados para Diferentes Momentos

- **Momentos de Louvor (85-95 dB)**: Durante o louvor congregacional, níveis mais altos são apropriados para criar uma atmosfera envolvente.
- **Pregação (70-80 dB)**: A pregação requer níveis mais moderados que permitam compreensão clara sem causar fadiga auditiva.
- **Momentos de Oração (60-70 dB)**: Durante orações, volumes mais baixos criam uma atmosfera apropriada para reflexão.

## Timbre: A Personalidade do Som

O timbre é o que nos permite distinguir entre diferentes vozes cantando a mesma nota no mesmo volume, ou entre um violão e um piano tocando a mesma melodia. É determinado pelos harmônicos presentes no som.

## Como o Som se Comporta no Ambiente

### Propagação do Som

O som se propaga em ondas esféricas a partir da fonte sonora, perdendo intensidade com a distância. Esta perda segue a "lei do inverso do quadrado", o que significa que dobrar a distância da fonte reduz o volume em aproximadamente 6 dB.

### Reflexão e Eco

Quando as ondas sonoras encontram superfícies duras como paredes, teto ou piso, elas refletem de volta para o ambiente. Se essas reflexões chegam aos nossos ouvidos com um atraso perceptível, percebemos um eco distinto.

### Reverberação

A reverberação é a persistência do som após a fonte original parar, causada por múltiplas reflexões que se misturam. Um pouco de reverberação é desejável, mas reverberação excessiva pode tornar a fala ininteligível.

## Conclusão

Compreender estes conceitos fundamentais do som é o primeiro passo para operar um sistema de áudio de forma eficaz em qualquer igreja. Frequência, amplitude e timbre são as ferramentas conceituais que nos permitem fazer ajustes precisos e intencionais.

Lembre-se de que o objetivo final não é demonstrar conhecimento técnico, mas sim garantir que a mensagem de Deus seja ouvida com clareza por toda a congregação.
      `
    },
    'microfones': {
      id: 'microfones',
      title: 'Microfones para Igrejas: Guia Completo de Escolha e Uso',
      category: 'Equipamentos',
      readTime: '20 min',
      author: 'Manus AI',
      date: '2024-06-03',
      excerpt: 'Tudo sobre microfones dinâmicos vs condensadores, aplicações específicas para pastores, cantores e instrumentos, e técnicas de uso correto.',
      content: `
# Microfones para Igrejas: Guia Completo de Escolha e Uso

O microfone é o primeiro elo da cadeia de áudio em qualquer igreja. É ele que captura a voz do pastor, dos cantores e dos instrumentos, convertendo energia sonora em sinal elétrico que será processado e amplificado pelo sistema.

## Tipos Fundamentais de Microfones

Existem dois tipos principais de microfones que dominam o mercado e são relevantes para uso em igrejas: **dinâmicos** e **condensadores**.

### Microfones Dinâmicos

Os microfones dinâmicos funcionam através de um princípio eletromagnético simples. Uma bobina móvel conectada ao diafragma se move dentro de um campo magnético, gerando um sinal elétrico proporcional às variações de pressão sonora.

**Características dos Microfones Dinâmicos:**

- **Robustez e Durabilidade**: A construção simples e sólida os torna extremamente resistentes a impactos, quedas e manuseio inadequado.
- **Resistência à Umidade**: Não são sensíveis à umidade, importante para vocalistas que podem transpirar.
- **Não Requer Alimentação**: Geram seu próprio sinal e não precisam de alimentação phantom power.
- **Boa Rejeição de Feedback**: A resposta de frequência naturalmente limitada contribui para menor tendência ao feedback.

### Microfones Condensadores

Os microfones condensadores funcionam através de um capacitor variável. Uma membrana metálica muito fina atua como uma das placas do capacitor, movendo-se em resposta às variações de pressão sonora.

**Características dos Microfones Condensadores:**

- **Alta Sensibilidade**: Extremamente sensíveis, capazes de captar os menores detalhes sonoros.
- **Excelente Resposta a Transientes**: A membrana leve responde rapidamente a mudanças súbitas no som.
- **Ampla Resposta de Frequência**: Oferecem resposta mais uniforme em todo o espectro audível.
- **Requer Alimentação Phantom**: Necessitam de alimentação phantom power (geralmente 48V) da mesa de som.

## Aplicações Específicas na Igreja

### Pastor e Pregadores

**Recomendação: Microfone Dinâmico**

Para pastores e pregadores, microfones dinâmicos são geralmente a melhor escolha devido à robustez, resistência à umidade e boa rejeição de feedback.

**Modelos Recomendados**: O Shure SM58 é considerado o padrão da indústria para aplicações vocais ao vivo.

### Vocalistas Principais

**Recomendação: Microfone Dinâmico**

Para vocalistas principais, especialmente em contextos de louvor contemporâneo, microfones dinâmicos oferecem a combinação ideal de qualidade sonora e praticidade.

### Coral e Grupos Vocais

**Recomendação: Microfones Condensadores**

Para corais e grupos vocais, microfones condensadores são preferíveis devido à maior sensibilidade e capacidade de captar múltiplas vozes simultaneamente.

### Instrumentos Acústicos

**Recomendação: Microfones Condensadores**

Instrumentos acústicos como violão, piano, violino e instrumentos de sopro geralmente se beneficiam da sensibilidade e resposta de frequência ampla dos microfones condensadores.

## Microfones Sem Fio

Sistemas de microfones sem fio oferecem liberdade de movimento, mas introduzem complexidades adicionais:

### Vantagens
- **Mobilidade**: Pastores podem se mover livremente pelo templo
- **Segurança**: Eliminam riscos de tropeços em cabos
- **Flexibilidade**: Facilitam mudanças rápidas de configuração

### Desafios
- **Gerenciamento de Frequências**: Podem sofrer interferência de outros dispositivos
- **Gerenciamento de Baterias**: Baterias descarregadas podem causar interrupções
- **Custo**: Significativamente mais caros que equivalentes com fio

## Cuidados e Manutenção

### Cuidados Básicos
- **Manuseio**: Segurar pelo corpo, não pela cápsula
- **Limpeza**: Limpar regularmente com pano seco
- **Armazenamento**: Guardar em local seco e protegido

### Manutenção Preventiva
- **Verificação de Cabos**: Cabos são frequentemente o ponto de falha mais comum
- **Teste Regular**: Estabelecer rotina de teste de todos os microfones
- **Limpeza Profissional**: Microfones condensadores podem se beneficiar de limpeza profissional periódica

## Conclusão

A escolha e uso adequado de microfones é fundamental para o sucesso de qualquer sistema de áudio em igrejas. Compreender as diferenças entre tipos de microfones, suas aplicações ideais e técnicas de uso correto permite tomar decisões informadas.

Lembre-se de que o microfone mais caro não é necessariamente o melhor para sua aplicação específica. A chave está em entender as necessidades de sua igreja e as características de seu ambiente acústico.
      `
    },
    'equalizacao': {
      id: 'equalizacao',
      title: 'Equalização para Igrejas: Moldando o Som Perfeito',
      category: 'Técnicas',
      readTime: '18 min',
      author: 'Manus AI',
      date: '2024-06-03',
      excerpt: 'Domine a arte da equalização para obter clareza na voz do pastor, presença nos instrumentos e um som equilibrado em todo o culto.',
      content: `
# Equalização para Igrejas: Moldando o Som Perfeito

A equalização é uma das ferramentas mais poderosas e importantes na operação de áudio em igrejas. É através dela que moldamos o som, corrigimos problemas acústicos e criamos a atmosfera sonora adequada para cada momento do culto.

## O que é Equalização?

A equalização é o processo de ajustar o balanço entre diferentes frequências do espectro sonoro, permitindo realçar ou atenuar determinadas faixas para obter o som desejado.

## Faixas de Frequência

### Graves (20Hz - 250Hz)
- **Características**: Corpo, peso, fundação do som
- **Problemas**: Excesso causa "embolamento"
- **Aplicação**: Base harmônica da música

### Médios-Graves (250Hz - 500Hz)
- **Características**: Calor e corpo de instrumentos e vozes
- **Problemas**: Excesso causa som "abafado"
- **Aplicação**: Corpo dos instrumentos

### Médios (500Hz - 2kHz)
- **Características**: Inteligibilidade da voz, presença de instrumentos
- **Importância**: Região crítica para clareza
- **Aplicação**: Compreensão da fala

### Médios-Agudos (2kHz - 5kHz)
- **Características**: Articulação, definição, ataque
- **Problemas**: Excesso causa fadiga auditiva
- **Aplicação**: Clareza e presença

### Agudos (5kHz - 20kHz)
- **Características**: Brilho, ar, clareza
- **Problemas**: Excesso causa som estridente
- **Aplicação**: Definição e brilho

## Equalização por Elemento

### Voz do Pastor
- **Realçar**: 2-4kHz (clareza)
- **Atenuar**: 200-300Hz (murmúrio)
- **Objetivo**: Máxima inteligibilidade

### Vocalistas
- **Realçar**: 3-5kHz (presença)
- **Atenuar**: 500Hz (congestão)
- **Objetivo**: Presença e clareza

### Violão/Guitarra
- **Realçar**: 80-100Hz (corpo), 2-4kHz (definição)
- **Atenuar**: 300-500Hz (embolamento)
- **Objetivo**: Corpo e definição

### Teclado/Piano
- **Realçar**: 100Hz (graves), 5kHz (brilho)
- **Atenuar**: 250-400Hz (congestão)
- **Objetivo**: Amplitude e brilho

### Bateria
- **Realçar**: 60-80Hz (bumbo), 5-8kHz (pratos)
- **Atenuar**: 400Hz (caixa "abafada")
- **Objetivo**: Impacto e definição

## Técnicas de Equalização

### Equalização Subtrativa vs Aditiva

**Equalização Subtrativa** (Recomendada):
- Cortar frequências problemáticas
- Mais natural e musical
- Evita saturação

**Equalização Aditiva**:
- Realçar frequências desejadas
- Usar com moderação
- Pode causar feedback

### Processo de Equalização

1. **Comece Neutro**: Todos os controles na posição flat
2. **Identifique Problemas**: Ouça atentamente
3. **Corte Primeiro**: Remova frequências problemáticas
4. **Realce Sutilmente**: Adicione presença se necessário
5. **Teste em Contexto**: Avalie na mixagem completa

## Equalização para Diferentes Ambientes

### Templos Reverberantes
- **Reduzir**: Agudos para evitar confusão
- **Cuidado**: Com médios-agudos
- **Foco**: Clareza da fala

### Templos Absorventes
- **Adicionar**: Agudos para manter clareza
- **Realçar**: Presença
- **Compensar**: Perda natural de brilho

## Ferramentas de Equalização

### EQ Paramétrico
- **Controles**: Frequência, ganho, largura de banda (Q)
- **Vantagem**: Precisão total
- **Uso**: Correções específicas

### EQ Gráfico
- **Controles**: Bandas fixas com controle de ganho
- **Vantagem**: Visualização clara
- **Uso**: Ajustes gerais

### EQ Shelving
- **Controles**: Frequência de corte e ganho
- **Vantagem**: Ajustes suaves
- **Uso**: Graves e agudos gerais

## Dicas Práticas para Igrejas

### Durante a Passagem de Som
1. **Ajuste Individual**: Equalize cada canal separadamente
2. **Teste em Grupo**: Verifique na mixagem completa
3. **Considere a Congregação**: Igreja vazia vs cheia soa diferente
4. **Documente**: Anote configurações que funcionam

### Durante o Culto
1. **Ajustes Mínimos**: Evite mudanças drásticas
2. **Priorize a Fala**: Pastor sempre em primeiro lugar
3. **Adapte ao Momento**: Louvor vs pregação vs oração
4. **Monitore Constantemente**: Ouça atentamente

### Problemas Comuns e Soluções

**Feedback (Microfonia)**:
- **Causa**: Frequências ressonantes
- **Solução**: Corte estreito na frequência problemática

**Falta de Clareza na Voz**:
- **Causa**: Falta de presença
- **Solução**: Realce sutil em 2-4kHz

**Som Abafado**:
- **Causa**: Excesso de médios-graves
- **Solução**: Corte em 250-500Hz

**Som Estridente**:
- **Causa**: Excesso de agudos
- **Solução**: Corte suave acima de 5kHz

## Equalização e Acústica do Ambiente

### Considerações Importantes
- **Tempo de Reverberação**: Afeta escolhas de EQ
- **Materiais do Ambiente**: Influenciam resposta
- **Posição dos Alto-falantes**: Determina necessidades
- **Tamanho da Congregação**: Altera acústica

### Adaptação ao Ambiente
- **Meça a Resposta**: Use analisador de espectro se disponível
- **Teste Sistematicamente**: Diferentes posições
- **Documente Resultados**: Crie biblioteca de configurações
- **Ajuste Sazonalmente**: Mudanças climáticas afetam acústica

## Ferramentas Modernas

### Analisadores de Espectro
- **Função**: Visualização em tempo real
- **Benefício**: Identificação precisa de problemas
- **Uso**: Configuração inicial e solução de problemas

### Auto-EQ
- **Função**: Equalização automática
- **Benefício**: Ponto de partida rápido
- **Limitação**: Não substitui ouvido treinado

### Apps para Smartphone
- **Função**: Análise básica
- **Benefício**: Ferramenta sempre disponível
- **Uso**: Verificação rápida de problemas

## Desenvolvimento do Ouvido

### Treinamento Auditivo
1. **Ouça Criticamente**: Analise diferentes gravações
2. **Identifique Frequências**: Pratique reconhecimento
3. **Compare Referências**: Use gravações conhecidas
4. **Pratique Regularmente**: Desenvolva memória auditiva

### Exercícios Práticos
- **Sweep de Frequência**: Identifique bandas problemáticas
- **A/B Testing**: Compare com e sem EQ
- **Blind Testing**: Teste sem ver configurações
- **Análise de Referência**: Compare com gravações profissionais

## Conclusão

A equalização é uma arte que combina conhecimento técnico com sensibilidade musical. Em igrejas, o objetivo principal é sempre servir à mensagem e à experiência espiritual da congregação.

Lembre-se de que a melhor equalização é frequentemente a mais sutil. O objetivo não é impressionar com efeitos dramáticos, mas sim criar um ambiente sonoro que permita que a Palavra de Deus seja ouvida com clareza e que o louvor toque os corações.

Pratique regularmente, desenvolva seu ouvido e sempre mantenha o foco no propósito maior: facilitar a comunicação entre Deus e Seu povo através de um áudio claro e envolvente.
      `
    }
  }

  useEffect(() => {
    // Simular carregamento do artigo
    setLoading(true)
    setTimeout(() => {
      setArticle(articles[articleId] || null)
      setLoading(false)
    }, 500)
  }, [articleId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Carregando artigo...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Artigo não encontrado</h2>
          <Button onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao início
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header do artigo */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao início
          </Button>
          
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {article.excerpt}
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime}
            </div>
            <div>
              {new Date(article.date).toLocaleDateString('pt-BR')}
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do artigo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: article.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, match => {
                const level = match.trim().length
                return `<h${level} class="text-${4-level}xl font-bold text-gray-900 mt-8 mb-4">`
              }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ArticlePage

