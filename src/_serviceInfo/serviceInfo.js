import service0 from "../_assets/service0.jpg";
import service1 from "../_assets/service1.jpg"
import service2 from "../_assets/service2.jpg"
import service3 from "../_assets/servise3.jpg"

export const services = [
  {
    id: 'accident',
    imageSrc:service0,
    title: 'Юридические услуги при ДТП',
    subtitle: '"Обжалование  действий сотрудников ГИБДД, судебной экспертизы, ' +
      'юридическая помощь при ДТП, возврат водительских прав, сопровождение сделки ' +
      'купли-продажи автомобиля. ' +
      'Своевременное обращение к автоюристам – экономия вашего времени и финансов."',
    flipped:false,
    additionalInfo: [
      '-обжалование постановлений ГИБДД',
      '-проведение независимой экспертизы',
      '-составление административных жалоб на действия/бездействие сотрудников ГИБДД',
      '-помощь в составлении схемы аварии и поиске свидетелей на месте ДТП',
      '-возмещение ущерба по КАСКО и ОСАГО после ДТП',
      '-возврат водительского удостоверения',
      '-участие в делах, связанных с причинением тяжкого вреда здоровью в результате ДТП',
    ],
    isListInfo: true,
  },
  {
    id: 'administrative_disputes',
    imageSrc:service1,
    title: 'Гражданско-правовая помощь',
    subtitle: '"Гражданское право объединяет правовые нормы, регулирующие имущественные, а также связанные и несвязанные с ними личные неимущественные отношения, которые возникают между различными организациями и физическими лицами, а также между отдельными гражданами."',
    flipped:true,
    additionalInfo: [
      '-Споры по договорам купли-продажи, дарения, мены недвижимости(домов, квартир, земельных участков)',
      '-Судебные споры по договорам ипотечного кредитования',
      '-Приватизация жилья в судебном порядке',
      '-Споры в части подселения, вселения и выселения',
      '-Споры о порядке пользования жилым помещением',
      '-Споры, связанные с сохранением права на жилое помещение',
      '-Споры, связанные с долевым строительством жилья',
      '-Представительство интересов по спорам с ЖКХ',
      '-Представительство по спорам с ТСЖ',
      '-Представительство интересов по спорам со страховыми компаниями в части возмещения вреда здоровью недвижимости и любому виду имущества',
    ],
    isListInfo: true
  },
  {
    id: 'organizations_support',
    imageSrc:service2,
    title: 'Юридическое сопровождение организаций',
    subtitle: '"Мы работаем с предпринимателями и юридическими лицами, осуществляем юридическое сопровождение бизнеса, оградим вас от неприятностей, оптимизируюем налогообложение."',
    flipped: false,
    additionalInfo: `Любая крупная компания содержит в штате юристов либо целый отдел, 
    поскольку эффективность деятельности очень часто зависит от работы данных специалистов. 
    Однако не каждый предприниматель имеет финансово такую возможность, поэтому абонентское обслуживание является 
    удобной альтернативой. За вполне приемлемые деньги вы получаете в свое распоряжение юридические услуги, 
    виды зависят от потребностей. Чаще всего это работа с документами, анализ договоров, выдача заключений по тем или иным вопросам, 
    взыскание задолженностей с контрагентов, взаимодействие с государственными органами, получение разрешений, лицензий. Все виды услуг для юридических лиц могут 
    оказываться на постоянной основе за фиксированную плату либо в виде разовых обращений. Абонентское обслуживание включает полный комплекс и наиболее удобно, 
    поскольку есть возможность постоянной правовой поддержки. Стоимость определяется в зависимости от объема выполненных работ, количества часов и изготовленных документов. 
    Консалтинг и поддержка при создании и регистрации новых предприятий, проведении сделок поглощения и слияния, а также иных вариантов оптимизации структуры бизнеса, 
    при проведении процедуры банкротства или ликвидации.
    Комплексное юридическое обслуживание (оказание всего спектра правовой помощи в рамках абонентского договора).`,
    isListInfo: false
  },
  {
    id: 'land_law',
    imageSrc:service3,
    title: 'Споры, связанные с земельным правом и недвижимым имуществом',
    subtitle: '"Земельные споры возникают по поводу земли в связи с отказом предоставления земельного участка, его изъятием, ограничением прав на землю, нарушением границ землепользования, самовольным занятием и в других случаях, наши юристы помогут вам, когда нарушено субъективное право лица."',
    flipped:true,
    additionalInfo: [
      '-оформление участка земли в собственность',
      '-сопровождение сделок купли-продажи',
      '-определение и выделение долей в общей долевой собственности',
      '-уточнение границ земельного участка',
      '-признание сделки недействительной',
      '-оспаривание кадастровой стоимости участка',
      '-оформление межевания с внесением сведений в Кадастровую палату',
      '-получение разрешения на строительство',
    ],
    isListInfo: true
  },
]
