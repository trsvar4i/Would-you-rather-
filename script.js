(() => {
  'use strict';


  /* =========================================================
     CATEGORIES
     ========================================================= */

  const CATS = {

    funny: {
      label: 'Funny',
      emoji: '😂',
      color: '#ffd23f'
    },

    relationships: {
      label: 'Relationships',
      emoji: '💕',
      color: '#ff8fd8'
    },

    impossible: {
      label: 'Impossible',
      emoji: '🪄',
      color: '#4be3b0'
    },

    sad: {
      label: 'Sad',
      emoji: '🥲',
      color: '#8ec5ff'
    },

    life: {
      label: 'Life like',
      emoji: '🌱',
      color: '#ff963d'
    }

  };


  /* =========================================================
     QUESTIONS
     ========================================================= */

  const DATA = {

    funny: [

      ['Чихать конфетти', 'Икать мыльными пузырями'],

      ['Говорить всё песней, как в мюзикле', 'Ходить только танцуя'],

      ['Говорить голосом робота', 'Говорить голосом хомяка'],

      ['Всю жизнь ездить на страусе', 'Всю жизнь ездить на огромном гусе'],

      [
        'Каждое утро просыпаться с новой смешной причёской',
        'Каждое утро просыпаться с новым смешным акцентом'
      ],

      [
        'Чтобы вся еда была со вкусом арбуза',
        'Чтобы вся еда была со вкусом мяты'
      ],

      [
        'Ходить на работу или учёбу в клоунских ботинках',
        'Ходить на работу или учёбу в парике клоуна'
      ],

      ['Смеяться как гусь', 'Чихать как кот'],

      [
        'При входе в комнату — звучит торжественная фанфара',
        'При входе в комнату — все аплодируют и кричат «ура»'
      ],

      [
        'Понимать котов, но они только жалуются',
        'Понимать собак, но они только хвастаются'
      ],

      ['Иметь пушистый лисий хвост', 'Иметь длинные кроличьи уши'],

      ['Жить в доме-башмаке', 'Жить в доме-батуте'],

      [
        'Чтобы все твои сообщения были сплошь из смайликов',
        'Чтобы все твои сообщения были ЗАГЛАВНЫМИ БУКВАМИ'
      ],

      ['Всегда ходить в пижаме', 'Всегда ходить в костюме дракона'],

      [
        'Танцевать каждый раз, когда слышишь своё имя',
        'Петь каждый раз, когда слышишь слово «привет»'
      ],

      ['Иметь курицу-охранника', 'Иметь хомяка-личного ассистента'],

      ['Вместо лифта в доме — горка', 'Вместо лифта в доме — батут'],

      [
        'Чтобы тебя везде сопровождал личный оркестр',
        'Чтобы тебя везде сопровождал личный комментатор'
      ],

      ['Съесть ложку острого перца', 'Съесть ложку горчицы'],

      ['Чтобы вместо пальцев были сосиски', 'Чтобы вместо ушей были пельмени']

    ],


    relationships: [

      ['Знать всё, что думает твой партнёр', 'Чтобы партнёр знал всё, что думаешь ты'],

      ['Идеальная любовь, но без друзей', 'Отличные друзья, но без романтики'],

      ['Сказать правду, которая обидит', 'Соврать ради спокойствия'],

      [
        'Партнёр, который всегда опаздывает',
        'Партнёр, который всегда приходит слишком рано'
      ],

      ['Год жить в одной комнате с лучшим другом', 'Год жить с родителями'],

      ['Сюрприз-вечеринка в твою честь', 'Тихий ужин вдвоём'],

      ['Всегда писать первым(ой)', 'Всегда ждать, пока напишут тебе'],

      ['Общаться только по телефону', 'Общаться только перепиской'],

      ['Узнать, что о тебе говорят за спиной', 'Никогда об этом не узнать'],

      ['Бывший, который стал хорошим другом', 'Бывший, которого встречаешь везде'],

      [
        'Весёлый партнёр, но непредсказуемый',
        'Надёжный партнёр, но скучноватый'
      ],

      ['Одна большая любовь на всю жизнь', 'Много ярких коротких романов'],

      ['Чтобы партнёр читал твою переписку', 'Читать переписку партнёра'],

      ['Отпуск только вдвоём', 'Отпуск с компанией друзей'],

      [
        'Никогда не ссориться, но копить обиды',
        'Ссориться, но всё проговаривать'
      ],

      [
        'Друг, который всегда говорит правду в лицо',
        'Друг, который всегда поддакивает'
      ],

      ['Забыть день рождения друга', 'Чтобы друг забыл твой день рождения'],

      ['Свадьба на 300 человек', 'Побег вдвоём без гостей'],

      ['Знакомиться через друзей', 'Знакомиться через приложение'],

      ['Первое свидание в кино', 'Первое свидание на прогулке']

    ],


    impossible: [

      ['Уметь летать', 'Уметь становиться невидимым'],

      ['Читать чужие мысли', 'Видеть будущее'],

      ['Останавливать время', 'Отматывать время на 10 минут назад'],

      ['Дышать под водой', 'Никогда не хотеть спать'],

      ['Говорить на всех языках мира', 'Играть на любом инструменте'],

      ['Мгновенно телепортироваться', 'Бегать со скоростью звука'],

      ['Жить 300 лет', 'Жить 80 лет с идеальным здоровьем'],

      ['Управлять погодой', 'Разговаривать с животными'],

      [
        'Иметь клона, который делает скучные дела',
        'Иметь робота, который делает всё по дому'
      ],

      ['Побывать в прошлом на один день', 'Побывать в будущем на один день'],

      ['Иметь суперсилу', 'Иметь суперумный мозг'],

      ['Жить на Луне', 'Жить на дне океана'],

      ['Видеть призраков', 'Слышать мысли животных'],

      [
        'Исполнить одно желание, но с подвохом',
        'Исполнить три маленьких желания без подвоха'
      ],

      ['Вырасти до размера дома', 'Уменьшиться до размера мыши'],

      ['Быть бессмертным', 'Прожить одну идеальную жизнь'],

      ['Иметь личного дракона', 'Иметь личного космического робота'],

      [
        'Идеально вспоминать любой момент жизни',
        'Стирать из памяти любой неприятный момент'
      ],

      ['Знать дату своей смерти', 'Никогда её не знать'],

      ['Менять внешность по желанию', 'Менять голос по желанию']

    ],


    sad: [

      ['Потерять все свои фотографии', 'Потерять все воспоминания о поездках'],

      ['Никогда больше не слушать музыку', 'Никогда больше не смотреть кино'],

      ['Попрощаться с другом навсегда', 'Чтобы друг тебя забыл'],

      ['Узнать горькую правду', 'Жить в приятной иллюзии'],

      [
        'Оказаться одному на необитаемом острове',
        'Оказаться в толпе, где никто тебя не знает'
      ],

      [
        'Потерять вещь, с которой связана важная история',
        'Сломать подарок от друга'
      ],

      ['Остаться одному в праздник', 'Остаться одному в обычный будний день'],

      ['Жалеть о том, что сделал', 'Жалеть о том, на что не решился'],

      ['Расстаться по любви', 'Остаться в отношениях без любви'],

      ['Забыть имя близкого человека', 'Забыть его лицо'],

      ['Всегда помнить все обиды', 'Быстро забывать всё, включая хорошее'],

      ['Прощание без слов', 'Ссора перед расставанием'],

      ['Вечная дождливая осень', 'Вечная серая зима'],

      ['Пережить всех своих друзей', 'Чтобы друзья пережили тебя'],

      ['Никогда не вернуться домой', 'Никогда не уехать из дома'],

      [
        'Услышать «ты меня разочаровал» от родителя',
        'Услышать это от лучшего друга'
      ],

      ['Проснуться и забыть вчерашний день', 'Проживать один и тот же день снова и снова'],

      ['Не успеть сказать «спасибо»', 'Не успеть сказать «прости»'],

      [
        'Найти старую фотографию с теми, кого уже нет рядом',
        'Найти письмо от себя из прошлого'
      ],

      ['Плакать от каждой песни', 'Никогда больше не плакать']

    ],


    life: [

      ['Работа мечты, но с маленькой зарплатой', 'Скучная работа с большой зарплатой'],

      ['Жить в большом шумном городе', 'Жить в тихой деревне'],

      ['Всегда рано вставать', 'Всегда поздно ложиться'],

      [
        'Путешествовать всю жизнь без дома',
        'Жить в уютном доме и никуда не ездить'
      ],

      ['Ещё 5 лет учиться', 'Сразу пойти работать'],

      ['Копить на будущее', 'Тратить на впечатления сейчас'],

      ['Свой бизнес с риском', 'Стабильная работа без риска'],

      ['Выходные дома с книгой и сериалами', 'Выходные в поездке'],

      ['Много друзей, но поверхностных', 'Двое близких друзей'],

      ['Знать 10 языков', 'Освоить 10 профессий'],

      ['Месяц без соцсетей', 'Месяц без сладкого'],

      [
        'Всегда быть вовремя, но на нервах',
        'Всегда быть расслабленным, но опаздывать'
      ],

      ['Жить у моря', 'Жить в горах'],

      ['Большая квартира далеко от центра', 'Маленькая квартира в центре'],

      ['Всю жизнь готовить', 'Всю жизнь мыть посуду'],

      ['Спорт по утрам', 'Спорт по вечерам'],

      ['Быть известным', 'Быть богатым, но неизвестным'],

      ['Работать из дома', 'Работать в офисе'],

      ['Вечное лето', 'Четыре сезона'],

      ['Делать любимое дело бесплатно', 'Делать нелюбимое за большие деньги']

    ]

  };


  /* =========================================================
     TRAIT MAP
     ========================================================= */

  const TRAIT_MAP = {

    funny: [

      ['absurd', 'absurd'],
      ['spotlight', 'spotlight'],
      ['absurd', 'cozy'],
      ['absurd', 'absurd'],
      ['spotlight', 'spotlight'],
      ['absurd', 'absurd'],
      ['spotlight', 'spotlight'],
      ['absurd', 'cozy'],
      ['spotlight', 'spotlight'],
      ['cozy', 'cozy'],
      ['cozy', 'cozy'],
      ['absurd', 'absurd'],
      ['cozy', 'spotlight'],
      ['cozy', 'bold'],
      ['spotlight', 'spotlight'],
      ['absurd', 'cozy'],
      ['absurd', 'absurd'],
      ['spotlight', 'spotlight'],
      ['bold', 'bold'],
      ['absurd', 'absurd']

    ],


    relationships: [

      ['closeness', 'closeness'],
      ['closeness', 'independence'],
      ['honesty', 'harmony'],
      ['harmony', 'harmony'],
      ['closeness', 'closeness'],
      ['closeness', 'closeness'],
      ['closeness', 'independence'],
      ['closeness', 'independence'],
      ['honesty', 'harmony'],
      ['harmony', 'independence'],
      ['independence', 'stability'],
      ['closeness', 'independence'],
      ['closeness', 'honesty'],
      ['closeness', 'independence'],
      ['harmony', 'honesty'],
      ['honesty', 'harmony'],
      ['harmony', 'harmony'],
      ['closeness', 'independence'],
      ['closeness', 'independence'],
      ['closeness', 'harmony']

    ],


    impossible: [

      ['freedom', 'power'],
      ['knowledge', 'knowledge'],
      ['power', 'power'],
      ['adventure', 'freedom'],
      ['knowledge', 'knowledge'],
      ['freedom', 'power'],
      ['freedom', 'stability'],
      ['power', 'knowledge'],
      ['freedom', 'stability'],
      ['adventure', 'adventure'],
      ['power', 'knowledge'],
      ['adventure', 'adventure'],
      ['adventure', 'knowledge'],
      ['power', 'stability'],
      ['power', 'freedom'],
      ['freedom', 'stability'],
      ['adventure', 'adventure'],
      ['knowledge', 'stability'],
      ['knowledge', 'freedom'],
      ['freedom', 'freedom']

    ],


    sad: [

      ['memory', 'memory'],
      ['connection', 'connection'],
      ['connection', 'connection'],
      ['truth', 'protection'],
      ['resilience', 'connection'],
      ['memory', 'connection'],
      ['connection', 'resilience'],
      ['truth', 'resilience'],
      ['truth', 'protection'],
      ['memory', 'connection'],
      ['memory', 'protection'],
      ['protection', 'truth'],
      ['resilience', 'resilience'],
      ['connection', 'connection'],
      ['connection', 'stability'],
      ['connection', 'connection'],
      ['memory', 'resilience'],
      ['connection', 'truth'],
      ['memory', 'memory'],
      ['connection', 'resilience']

    ],


    life: [

      ['freedom', 'stability'],
      ['ambition', 'stability'],
      ['discipline', 'freedom'],
      ['freedom', 'stability'],
      ['ambition', 'stability'],
      ['stability', 'freedom'],
      ['ambition', 'stability'],
      ['stability', 'freedom'],
      ['freedom', 'stability'],
      ['ambition', 'ambition'],
      ['discipline', 'discipline'],
      ['discipline', 'freedom'],
      ['freedom', 'freedom'],
      ['stability', 'ambition'],
      ['balance', 'balance'],
      ['discipline', 'balance'],
      ['ambition', 'stability'],
      ['freedom', 'stability'],
      ['freedom', 'balance'],
      ['freedom', 'ambition']

    ]

  };


  /* =========================================================
     RESULT COPY
     ========================================================= */

  const TRAITS = {

    funny: {

      absurd: {
        title: 'Король абсурда',
        text:
          'Тебе нравится юмор, который ломает логику и превращает обычную ситуацию в полный сюр.'
      },

      spotlight: {
        title: 'Главный герой',
        text:
          'Тебе ближе яркий, заметный юмор: эффектный выход, реакция окружающих и немного театра.'
      },

      cozy: {
        title: 'Милый хаос',
        text:
          'Твой юмор скорее странный и забавный, чем громкий. Коты, хомяки и нелепая милота — твоя территория.'
      },

      bold: {
        title: 'Без тормозов',
        text:
          'В смешных дилеммах ты чаще выбираешь вариант понаглее и не боишься выглядеть максимально нелепо.'
      },

      balanced: {
        title: 'Комедийный микс',
        text:
          'Ты не застреваешь в одном виде юмора: тебе одинаково заходят абсурд, самоирония и эффектные приколы.'
      }

    },


    relationships: {

      closeness: {
        title: 'За близость',
        text:
          'В отношениях тебе особенно важны эмоциональный контакт, совместность и ощущение «мы».'
      },

      independence: {
        title: 'За личное пространство',
        text:
          'Даже в близких отношениях тебе важно сохранять свободу, границы и собственную жизнь.'
      },

      honesty: {
        title: 'Лучше сказать прямо',
        text:
          'Ты скорее выбираешь ясность и честный разговор, даже когда правда может быть неудобной.'
      },

      harmony: {
        title: 'Мир важнее драмы',
        text:
          'Ты склоняешься к спокойствию, мягкости и решениям, которые уменьшают напряжение.'
      },

      stability: {
        title: 'Надёжность прежде всего',
        text:
          'В отношениях тебе особенно важны предсказуемость, безопасность и ощущение, что на человека можно опереться.'
      },

      balanced: {
        title: 'Баланс близости и свободы',
        text:
          'Твои ответы не сводятся к одному сценарию: ты одновременно ценишь связь, границы и нормальный диалог.'
      }

    },


    impossible: {

      power: {
        title: 'Контроль реальности',
        text:
          'Если уж выбирать суперспособность, тебе нравится идея реально влиять на мир и менять правила игры.'
      },

      knowledge: {
        title: 'Знать больше всех',
        text:
          'Тебя сильнее привлекают способности, которые дают понимание, информацию и интеллектуальное преимущество.'
      },

      adventure: {
        title: 'Исследователь невозможного',
        text:
          'Ты выбираешь необычный опыт, неизвестные места и возможность увидеть то, чего обычный человек не увидит.'
      },

      freedom: {
        title: 'Без ограничений',
        text:
          'В фантастических выборах тебя особенно цепляет свобода: двигаться, меняться и жить без привычных границ.'
      },

      stability: {
        title: 'Суперсила здравого смысла',
        text:
          'Даже в невозможных сценариях ты часто выбираешь вариант, который делает жизнь удобнее, безопаснее и понятнее.'
      },

      balanced: {
        title: 'Суперспособности на все случаи',
        text:
          'Тебя нельзя поймать на одной фантазии: власть, знания, приключения и свобода набрали почти одинаково.'
      }

    },


    sad: {

      truth: {
        title: 'Лучше знать правду',
        text:
          'Даже в неприятных дилеммах тебе важнее ясность и проживание ситуации, чем комфортная иллюзия.'
      },

      memory: {
        title: 'Хранитель воспоминаний',
        text:
          'Ты сильно ценишь прошлое, символы, фотографии и всё, что сохраняет связь с важными моментами.'
      },

      connection: {
        title: 'Люди важнее обстоятельств',
        text:
          'Самые тяжёлые варианты для тебя связаны прежде всего с близкими людьми и потерей эмоциональной связи.'
      },

      resilience: {
        title: 'Пережить и идти дальше',
        text:
          'В сложных сценариях ты чаще выбираешь вариант, который оставляет возможность адаптироваться и продолжить жизнь.'
      },

      protection: {
        title: 'Беречь себя',
        text:
          'Ты не стремишься страдать ради принципа: иногда психологическая защита и спокойствие для тебя важнее жёсткой правды.'
      },

      stability: {
        title: 'Держаться за опору',
        text:
          'Когда выбор становится тяжёлым, тебе особенно важно сохранить хотя бы одну понятную и устойчивую точку.'
      },

      balanced: {
        title: 'Сложные чувства без простого ответа',
        text:
          'Твои выборы здесь очень разные: для тебя одинаково важны правда, память, люди и способность справляться.'
      }

    },


    life: {

      stability: {
        title: 'За устойчивую жизнь',
        text:
          'Ты чаще выбираешь надёжность, комфорт и понятную систему вместо риска ради самого риска.'
      },

      freedom: {
        title: 'За свободу и впечатления',
        text:
          'Тебе важна возможность выбирать свой маршрут, менять планы и получать новый опыт.'
      },

      ambition: {
        title: 'Режим: расти',
        text:
          'В жизненных дилеммах ты часто выбираешь развитие, результат, масштаб и возможность добиться большего.'
      },

      discipline: {
        title: 'Система решает',
        text:
          'Тебе ближе решения, где есть режим, самоконтроль и готовность делать полезное даже без мгновенного удовольствия.'
      },

      balance: {
        title: 'Без крайностей',
        text:
          'Ты скорее ищешь рабочий компромисс: чтобы и жить нормально, и не превращать жизнь в бесконечную гонку.'
      },

      balanced: {
        title: 'Гибкий жизненный сценарий',
        text:
          'У тебя нет одной формулы хорошей жизни: где-то важна свобода, где-то стабильность, а где-то результат.'
      }

    }

  };


  /* =========================================================
     FLAT QUESTION LIST
     ========================================================= */

  const ALL = [];

  let uid = 0;


  for (
    const [cat, list]
    of Object.entries(DATA)
  ) {

    list.forEach(
      ([a, b], index) => {

        ALL.push({

          id:
            uid++,

          cat,

          index,

          a,

          b

        });

      }
    );

  }


  /* =========================================================
     DOM
     ========================================================= */

  const $ =
    id =>
      document.getElementById(id);


  const el = {

    topicsPill:
      $('topicsPill'),

    badge:
      $('badge'),

    red:
      $('red'),

    blue:
      $('blue'),

    redInner:
      $('redInner'),

    blueInner:
      $('blueInner'),

    redText:
      $('redText'),

    blueText:
      $('blueText'),

    numStat:
      $('numStat'),

    leftStat:
      $('leftStat'),

    redStat:
      $('redStat'),

    blueStat:
      $('blueStat'),

    progressFill:
      $('progressFill'),

    historyBtn:
      $('historyBtn'),

    finishBtn:
      $('finishBtn'),

    menuBtn:
      $('menuBtn'),

    drawer:
      $('drawer'),

    scrim:
      $('scrim'),

    closeDrawer:
      $('closeDrawer'),

    history:
      $('history'),

    results:
      $('results'),

    resTitle:
      $('resTitle'),

    resSub:
      $('resSub'),

    bigBar:
      $('bigBar'),

    resRed:
      $('resRed'),

    resBlue:
      $('resBlue'),

    resCats:
      $('resCats'),

    profileLead:
      $('profileLead'),

    profileGrid:
      $('profileGrid'),

    continueBtn:
      $('continueBtn'),

    restartBtn:
      $('restartBtn'),

    toMenuBtn:
      $('toMenuBtn'),

    menu:
      $('menu'),

    topics:
      $('topics'),

    allBtn:
      $('allBtn'),

    noneBtn:
      $('noneBtn'),

    startBtn:
      $('startBtn'),

    menuHint:
      $('menuHint')

  };


  /* =========================================================
     STATE
     ========================================================= */

  const state = {

    selected:
      new Set(
        Object.keys(CATS)
      ),

    used:
      new Set(),

    queue:
      [],

    current:
      null,

    answers:
      [],

    busy:
      false,

    playing:
      false

  };


  const HISTORY_LIMIT =
    10;


  const SPARK_COLORS = [

    '#ffd23f',
    '#ffffff',
    '#ff8fd8',
    '#4be3b0',
    '#111111'

  ];


  let questionTimer =
    null;

  let hideTimer =
    null;

  let choiceTimer =
    null;


  /* =========================================================
     UTILS
     ========================================================= */

  function shuffle(arr) {

    for (
      let i = arr.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random()
          *
          (i + 1)
        );


      [
        arr[i],
        arr[j]
      ] = [
        arr[j],
        arr[i]
      ];

    }


    return arr;

  }


  function pool() {

    return ALL.filter(
      q =>
        state.selected.has(
          q.cat
        )
    );

  }


  function buildQueue() {

    state.queue =
      shuffle(

        pool().filter(
          q =>
            !state.used.has(
              q.id
            )
        )

      );

  }


  function restartAnim(
    node,
    cls
  ) {

    node.classList.remove(
      cls
    );

    void node.offsetWidth;

    node.classList.add(
      cls
    );

  }


  /* =========================================================
     TOPICS

     NEW:
     topic-wrap contains:
     - button.topic
     - span.topic__check
     ========================================================= */

  function renderTopics() {

    el.topics.innerHTML =
      '';


    Object.entries(CATS)
      .forEach(
        (
          [key, c],
          i
        ) => {

          const selected =
            state.selected.has(
              key
            );


          /* wrapper */

          const wrap =
            document.createElement(
              'div'
            );


          wrap.className =
            'topic-wrap'
            +
            (
              selected
                ?
                ' on'
                :
                ''
            );


          wrap.style.setProperty(
            '--i',
            i
          );


          /* button */

          const button =
            document.createElement(
              'button'
            );


          button.type =
            'button';


          button.className =
            'topic'
            +
            (
              selected
                ?
                ' on'
                :
                ''
            );


          button.style.setProperty(
            '--c',
            c.color
          );


          button.setAttribute(
            'aria-pressed',
            String(
              selected
            )
          );


          /* emoji */

          const emoji =
            document.createElement(
              'span'
            );


          emoji.className =
            'topic__emoji';


          emoji.textContent =
            c.emoji;


          /* name */

          const name =
            document.createElement(
              'span'
            );


          name.className =
            'topic__name';


          name.textContent =
            c.label;


          /* count */

          const count =
            document.createElement(
              'span'
            );


          count.className =
            'topic__count';


          count.textContent =
            `${DATA[key].length} вопросов`;


          /* checkmark OUTSIDE button */

          const check =
            document.createElement(
              'span'
            );


          check.className =
            'topic__check';


          check.textContent =
            '✓';


          button.append(
            emoji,
            name,
            count
          );


          wrap.append(
            button,
            check
          );


          button.addEventListener(
            'click',
            () =>
              toggleTopic(
                key,
                button,
                wrap
              )
          );


          el.topics.appendChild(
            wrap
          );

        }
      );


    updateMenuHint();

  }


  function toggleTopic(
    key,
    button,
    wrap
  ) {

    if (
      state.selected.has(key)
    ) {

      state.selected.delete(
        key
      );

    } else {

      state.selected.add(
        key
      );

    }


    const on =
      state.selected.has(key);


    button.classList.toggle(
      'on',
      on
    );


    wrap.classList.toggle(
      'on',
      on
    );


    button.setAttribute(
      'aria-pressed',
      String(on)
    );


    updateMenuHint();

  }


  function setAllTopics(all) {

    state.selected =
      new Set(

        all
          ?
          Object.keys(CATS)
          :
          []

      );


    const wraps =
      el.topics
        .querySelectorAll(
          '.topic-wrap'
        );


    wraps.forEach(
      (
        wrap,
        i
      ) => {

        const key =
          Object.keys(CATS)[i];


        const on =
          state.selected.has(
            key
          );


        const button =
          wrap.querySelector(
            '.topic'
          );


        wrap.classList.toggle(
          'on',
          on
        );


        button.classList.toggle(
          'on',
          on
        );


        button.setAttribute(
          'aria-pressed',
          String(on)
        );

      }
    );


    updateMenuHint();

  }


  function updateMenuHint() {

    const n =
      state.selected.size;


    const total =
      pool().length;


    el.startBtn.disabled =
      n === 0;


    el.menuHint.textContent =
      n

        ?

        `Выбрано тем: ${n} · вопросов: ${total}`

        :

        'Выбери хотя бы одну тему';

  }


  function renderTopicsPill() {

    const keys =
      Object.keys(CATS)
        .filter(
          key =>
            state.selected.has(key)
        );


    el.topicsPill.textContent =
      keys.length ===
      Object.keys(CATS).length

        ?

        '🎲 Все темы'

        :

        keys
          .map(
            key =>
              `${CATS[key].emoji} ${CATS[key].label}`
          )
          .join(
            ' · '
          );

  }


  /* =========================================================
     START
     ========================================================= */

  function startGame() {

    if (
      !state.selected.size
    ) {

      restartAnim(
        el.startBtn,
        'shake'
      );

      return;

    }


    clearTimeout(
      questionTimer
    );

    clearTimeout(
      hideTimer
    );

    clearTimeout(
      choiceTimer
    );


    state.used.clear();

    state.answers =
      [];

    state.current =
      null;

    state.busy =
      false;

    state.playing =
      true;


    document.body.classList.add(
      'playing'
    );


    el.red.classList.remove(
      'picked',
      'dropped'
    );


    el.blue.classList.remove(
      'picked',
      'dropped'
    );


    renderHistory(false);

    buildQueue();

    updateMeta();


    el.menu.classList.add(
      'leaving'
    );


    questionTimer =
      setTimeout(
        showQuestion,
        430
      );


    hideTimer =
      setTimeout(
        () =>
          el.menu.classList.add(
            'hidden'
          ),
        1250
      );

  }


  /* =========================================================
     OPEN MENU
     ========================================================= */

  function openMenu() {

    clearTimeout(
      questionTimer
    );

    clearTimeout(
      hideTimer
    );

    clearTimeout(
      choiceTimer
    );


    state.playing =
      false;

    state.busy =
      false;


    document.body.classList.remove(
      'playing'
    );


    el.red.classList.remove(
      'picked',
      'dropped'
    );


    el.blue.classList.remove(
      'picked',
      'dropped'
    );


    hideResults();

    toggleDrawer(false);

    renderTopics();

    renderTopicsPill();


    el.menu.classList.remove(
      'hidden'
    );


    el.menu.classList.add(
      'leaving'
    );


    void el.menu.offsetWidth;


    el.menu.classList.remove(
      'leaving'
    );

  }


  /* =========================================================
     SHOW QUESTION
     ========================================================= */

  function showQuestion() {

    if (
      !state.queue.length
    ) {

      state.current =
        null;


      showResults(true);

      return;

    }


    const q =
      state.queue.pop();


    const flip =
      Math.random() < .5;


    state.current = {

      ...q,

      red:
        flip
          ?
          q.b
          :
          q.a,

      blue:
        flip
          ?
          q.a
          :
          q.b,

      redOrigin:
        flip
          ?
          'b'
          :
          'a',

      blueOrigin:
        flip
          ?
          'a'
          :
          'b'

    };


    el.redText.textContent =
      state.current.red;


    el.blueText.textContent =
      state.current.blue;


    el.badge.textContent =
      `${CATS[q.cat].emoji} ${CATS[q.cat].label}`;


    document.documentElement
      .style
      .setProperty(
        '--cat-color',
        CATS[q.cat].color
      );


    el.topicsPill.textContent =
      `${CATS[q.cat].emoji} ${CATS[q.cat].label}`;


    restartAnim(
      el.topicsPill,
      'topic-pop'
    );


    restartAnim(
      el.redInner,
      'enter'
    );


    restartAnim(
      el.blueInner,
      'enter'
    );


    updateMeta();

  }


  /* =========================================================
     META
     ========================================================= */

  function updateMeta() {

    const total =
      pool().length;


    const answered =
      state.answers.length;


    el.numStat.textContent =
      answered
      +
      (
        state.current
          ?
          1
          :
          0
      );


    const left =
      pool()
        .filter(
          q =>
            !state.used.has(
              q.id
            )
        )
        .length

      -

      (
        state.current
          ?
          1
          :
          0
      );


    el.leftStat.textContent =
      Math.max(
        left,
        0
      );


    const reds =
      state.answers
        .filter(
          a =>
            a.side ===
            'red'
        )
        .length;


    el.redStat.textContent =
      reds;


    el.blueStat.textContent =
      state.answers.length
      -
      reds;


    const progress =
      total
        ?
        (
          answered
          /
          total
        )
        *
        100
        :
        0;


    el.progressFill.style.width =
      `${progress}%`;

  }


  /* =========================================================
     PARTICLES
     ========================================================= */

  function burst(half) {

    for (
      let i = 0;
      i < 22;
      i++
    ) {

      const particle =
        document.createElement(
          'span'
        );


      particle.className =
        'spark';


      const angle =
        Math.random()
        *
        Math.PI
        *
        2;


      const dist =
        110
        +
        Math.random()
        *
        230;


      particle.style.setProperty(
        '--dx',
        `${
          Math.cos(angle)
          *
          dist
        }px`
      );


      particle.style.setProperty(
        '--dy',
        `${
          Math.sin(angle)
          *
          dist
        }px`
      );


      particle.style.setProperty(
        '--rot',
        `${
          Math.random()
          *
          720
          -
          360
        }deg`
      );


      particle.style.background =
        SPARK_COLORS[
          i
          %
          SPARK_COLORS.length
        ];


      particle.style.borderRadius =
        Math.random() < .45
          ?
          '50%'
          :
          '3px';


      particle.style.width =
        `${
          8
          +
          Math.random()
          *
          10
        }px`;


      particle.style.height =
        particle.style.width;


      half.appendChild(
        particle
      );


      setTimeout(
        () =>
          particle.remove(),
        900
      );

    }

  }


  /* =========================================================
     GET SEMANTIC TRAIT
     ========================================================= */

  function getTrait(
    question,
    origin
  ) {

    const pair =
      TRAIT_MAP[
        question.cat
      ][
        question.index
      ];


    return origin === 'a'
      ?
      pair[0]
      :
      pair[1];

  }


  /* =========================================================
     CHOOSE
     ========================================================= */

  function choose(side) {

    if (
      !state.playing
      ||
      state.busy
      ||
      !state.current
    ) {

      return;

    }


    state.busy =
      true;


    const q =
      state.current;


    const chosenOrigin =
      side === 'red'
        ?
        q.redOrigin
        :
        q.blueOrigin;


    const trait =
      getTrait(
        q,
        chosenOrigin
      );


    state.used.add(
      q.id
    );


    state.answers.push({

      id:
        q.id,

      cat:
        q.cat,

      index:
        q.index,

      side,

      origin:
        chosenOrigin,

      trait,

      picked:
        side === 'red'
          ?
          q.red
          :
          q.blue,

      other:
        side === 'red'
          ?
          q.blue
          :
          q.red

    });


    const chosen =
      side === 'red'
        ?
        el.red
        :
        el.blue;


    const other =
      side === 'red'
        ?
        el.blue
        :
        el.red;


    chosen.classList.add(
      'picked'
    );


    other.classList.add(
      'dropped'
    );


    burst(
      chosen
    );


    state.current =
      null;


    updateMeta();


    restartAnim(

      side === 'red'
        ?
        el.redStat
        :
        el.blueStat,

      'bump'

    );


    renderHistory(true);


    choiceTimer =
      setTimeout(

        () => {

          chosen.classList.remove(
            'picked'
          );


          other.classList.remove(
            'dropped'
          );


          state.busy =
            false;


          showQuestion();

        },

        720

      );

  }


  /* =========================================================
     HISTORY
     ========================================================= */

  function renderHistory(
    animate
  ) {

    el.history.innerHTML =
      '';


    const last =
      state.answers
        .slice(
          -HISTORY_LIMIT
        )
        .reverse();


    if (
      !last.length
    ) {

      const li =
        document.createElement(
          'li'
        );


      li.className =
        'empty';


      li.textContent =
        'Пока пусто. Сделай первый выбор — и он появится здесь.';


      el.history.appendChild(
        li
      );


      return;

    }


    last.forEach(
      (
        answer,
        i
      ) => {

        const li =
          document.createElement(
            'li'
          );


        li.className =
          `h-item h-item--${answer.side}`;


        if (
          !animate
        ) {

          li.style.animation =
            'none';

        } else {

          li.style.animationDelay =
            `${i * 35}ms`;

        }


        const cat =
          document.createElement(
            'div'
          );


        cat.className =
          'h-item__cat';


        cat.textContent =
          `${
            CATS[
              answer.cat
            ].emoji
          } ${
            CATS[
              answer.cat
            ].label
          }`;


        const pick =
          document.createElement(
            'span'
          );


        pick.className =
          'h-pick';


        pick.textContent =
          answer.picked;


        const other =
          document.createElement(
            'span'
          );


        other.className =
          'h-other';


        other.textContent =
          answer.other;


        li.append(
          cat,
          pick,
          other
        );


        el.history.appendChild(
          li
        );

      }
    );

  }


  /* =========================================================
     DRAWER
     ========================================================= */

  function toggleDrawer(open) {

    el.drawer.classList.toggle(
      'open',
      open
    );


    el.scrim.classList.toggle(
      'open',
      open
    );


    el.drawer.setAttribute(
      'aria-hidden',
      String(!open)
    );


    if (
      open
    ) {

      renderHistory(true);

    }

  }


  /* =========================================================
     PROFILE CALCULATION
     ========================================================= */

  function getCategoryProfile(cat) {

    const answers =
      state.answers.filter(
        answer =>
          answer.cat === cat
      );


    if (
      !answers.length
    ) {

      return null;

    }


    const counts =
      {};


    answers.forEach(
      answer => {

        counts[
          answer.trait
        ] =
          (
            counts[
              answer.trait
            ]
            ||
            0
          )
          +
          1;

      }
    );


    const ranking =
      Object.entries(
        counts
      )
      .sort(
        (
          a,
          b
        ) =>
          b[1]
          -
          a[1]
      );


    const [
      topTrait,
      topCount
    ] =
      ranking[0];


    const secondCount =
      ranking[1]
        ?
        ranking[1][1]
        :
        0;


    const tied =
      topCount ===
      secondCount;


    const traitKey =
      tied
        ?
        'balanced'
        :
        topTrait;


    const dominance =
      topCount
      /
      answers.length;


    return {

      cat,

      count:
        answers.length,

      trait:
        traitKey,

      rawTrait:
        topTrait,

      topCount,

      dominance,

      tied,

      copy:
        TRAITS[
          cat
        ][
          traitKey
        ]

    };

  }


  /* =========================================================
     PROFILE UI
     ========================================================= */

  function renderProfile() {

    el.profileGrid.innerHTML =
      '';


    el.profileLead.innerHTML =
      '';


    el.profileLead.classList.remove(
      'show'
    );


    const profiles =
      Object.keys(CATS)
        .filter(
          cat =>
            state.selected.has(cat)
        )
        .map(
          cat =>
            getCategoryProfile(cat)
        )
        .filter(Boolean);


    if (
      !profiles.length
    ) {

      return;

    }


    const strongest =
      profiles
        .slice()
        .sort(
          (
            a,
            b
          ) =>
            b.dominance
            -
            a.dominance
        )[0];


    if (
      strongest
      &&
      strongest.count >= 2
    ) {

      const strongPercent =
        Math.round(
          strongest.dominance
          *
          100
        );


      el.profileLead.innerHTML =
        `
          <strong>
            Самый яркий паттерн:
            ${strongest.copy.title}
          </strong>

          В теме
          «${CATS[strongest.cat].label}»
          этот тип ответа встречался чаще всего —
          примерно в ${strongPercent}% твоих выборов.
        `;


      el.profileLead.classList.add(
        'show'
      );

    }


    profiles.forEach(
      (
        profile,
        index
      ) => {

        const cat =
          CATS[
            profile.cat
          ];


        const percent =
          Math.round(
            profile.dominance
            *
            100
          );


        const item =
          document.createElement(
            'article'
          );


        item.className =
          'profile-item';


        item.style.setProperty(
          '--profile-color',
          cat.color
        );


        item.style.setProperty(
          '--delay',
          `${index * 80}ms`
        );


        item.innerHTML =
          `
            <div class="profile-item__top">

              <span class="profile-item__cat">
                ${cat.emoji}
                ${cat.label}
              </span>

              <span class="profile-item__score">
                ${profile.count}
                отв.
              </span>

            </div>

            <strong class="profile-item__title">
              ${profile.copy.title}
            </strong>

            <p class="profile-item__text">
              ${profile.copy.text}
            </p>

            <div class="profile-item__meter">
              <span></span>
            </div>
          `;


        el.profileGrid.appendChild(
          item
        );


        const meter =
          item.querySelector(
            '.profile-item__meter span'
          );


        requestAnimationFrame(
          () =>
            requestAnimationFrame(
              () => {

                meter.style.width =
                  `${percent}%`;

              }
            )
        );

      }
    );

  }


  /* =========================================================
     RESULTS
     ========================================================= */

  function showResults(
    exhausted = false
  ) {

    if (
      !state.playing
    ) {

      return;

    }


    toggleDrawer(false);


    const total =
      state.answers.length;


    const reds =
      state.answers
        .filter(
          answer =>
            answer.side ===
            'red'
        )
        .length;


    const blues =
      total
      -
      reds;


    const redPercent =
      total
        ?
        Math.round(
          reds
          /
          total
          *
          100
        )
        :
        0;


    const bluePercent =
      total
        ?
        100
        -
        redPercent
        :
        0;


    let title =
      'Итоги игры';


    let sub =
      '';


    if (
      !total
    ) {

      title =
        'Пока без итогов';


      sub =
        'Сделай хотя бы один выбор — тогда здесь появится твой игровой профиль.';

    } else if (
      Math.abs(
        reds
        -
        blues
      )
      <=
      1
    ) {

      sub =
        'По цветам почти идеальный баланс. Но смысл выбранных вариантов рассказывает гораздо больше.';

    } else if (
      reds
      >
      blues
    ) {

      sub =
        `Красный побеждает со счётом ${reds}:${blues}. Ниже — что именно ты выбирал по смыслу.`;

    } else {

      sub =
        `Синий побеждает со счётом ${blues}:${reds}. Ниже — что именно ты выбирал по смыслу.`;

    }


    if (
      exhausted
      &&
      total
    ) {

      sub =
        'Ты прошёл все выбранные вопросы. '
        +
        sub;

    }


    el.resTitle.textContent =
      title;


    el.resSub.textContent =
      sub;


    el.resRed.textContent =
      `${reds} (${redPercent}%)`;


    el.resBlue.textContent =
      `${blues} (${bluePercent}%)`;


    el.bigBar.innerHTML =
      `
        <span class="seg seg--red"></span>
        <span class="seg seg--blue"></span>
      `;


    const [
      segRed,
      segBlue
    ] =
      el.bigBar.children;


    el.resCats.innerHTML =
      '';


    const rows =
      Object.entries(CATS)

        .filter(
          ([key]) =>
            state.selected.has(
              key
            )
        )

        .map(
          (
            [key, cat]
          ) => {

            const list =
              state.answers
                .filter(
                  answer =>
                    answer.cat ===
                    key
                );


            const r =
              list
                .filter(
                  answer =>
                    answer.side ===
                    'red'
                )
                .length;


            return {

              key,

              cat,

              total:
                list.length,

              red:
                r,

              blue:
                list.length
                -
                r

            };

          }
        );


    const maxAnswered =
      Math.max(
        0,
        ...rows.map(
          row =>
            row.total
        )
      );


    const barAnimations =
      [];


    rows.forEach(
      row => {

        const wrap =
          document.createElement(
            'div'
          );


        wrap.className =
          'cat-row'
          +
          (
            maxAnswered > 0
            &&
            row.total ===
            maxAnswered

              ?

              ' cat-row--top'

              :

              ''
          );


        const head =
          document.createElement(
            'div'
          );


        head.className =
          'cat-row__head';


        const name =
          document.createElement(
            'span'
          );


        name.textContent =
          `${
            row.cat.emoji
          } ${
            row.cat.label
          }`;


        const score =
          document.createElement(
            'span'
          );


        score.textContent =
          row.total
            ?
            `${row.red} : ${row.blue}`
            :
            '—';


        head.append(
          name,
          score
        );


        const bar =
          document.createElement(
            'div'
          );


        bar.className =
          'mini-bar';


        const sr =
          document.createElement(
            'span'
          );


        sr.className =
          'seg seg--red';


        const sb =
          document.createElement(
            'span'
          );


        sb.className =
          'seg seg--blue';


        bar.append(
          sr,
          sb
        );


        const redWidth =
          row.total
            ?
            row.red
            /
            row.total
            *
            100
            :
            0;


        const blueWidth =
          row.total
            ?
            row.blue
            /
            row.total
            *
            100
            :
            0;


        barAnimations.push({
          sr,
          sb,
          redWidth,
          blueWidth
        });


        wrap.append(
          head,
          bar
        );


        el.resCats.appendChild(
          wrap
        );

      }
    );


    renderProfile();


    const remaining =
      pool()
        .filter(
          q =>
            !state.used.has(
              q.id
            )
        )
        .length;


    el.continueBtn.style.display =
      remaining > 0
        ?
        ''
        :
        'none';


    el.results.classList.add(
      'open'
    );


    el.results.setAttribute(
      'aria-hidden',
      'false'
    );


    requestAnimationFrame(

      () =>
        requestAnimationFrame(

          () => {

            segRed.style.width =
              `${redPercent}%`;


            segBlue.style.width =
              `${bluePercent}%`;


            barAnimations
              .forEach(
                item => {

                  item.sr.style.width =
                    `${item.redWidth}%`;


                  item.sb.style.width =
                    `${item.blueWidth}%`;

                }
              );

          }

        )

    );

  }


  /* =========================================================
     HIDE RESULTS
     ========================================================= */

  function hideResults() {

    el.results.classList.remove(
      'open'
    );


    el.results.setAttribute(
      'aria-hidden',
      'true'
    );

  }


  /* =========================================================
     RESTART
     ========================================================= */

  function restart() {

    hideResults();


    clearTimeout(
      choiceTimer
    );


    state.used.clear();


    state.answers =
      [];


    state.current =
      null;


    state.busy =
      false;


    buildQueue();

    renderHistory(false);

    updateMeta();

    showQuestion();

  }


  /* =========================================================
     CONTINUE
     ========================================================= */

  function continueGame() {

    hideResults();


    if (
      !state.current
    ) {

      buildQueue();

      showQuestion();

    }

  }


  /* =========================================================
     EVENTS
     ========================================================= */

  el.red.addEventListener(
    'click',
    () =>
      choose(
        'red'
      )
  );


  el.blue.addEventListener(
    'click',
    () =>
      choose(
        'blue'
      )
  );


  el.historyBtn.addEventListener(
    'click',
    () =>
      toggleDrawer(
        !el.drawer
          .classList
          .contains(
            'open'
          )
      )
  );


  el.closeDrawer.addEventListener(
    'click',
    () =>
      toggleDrawer(false)
  );


  el.scrim.addEventListener(
    'click',
    () =>
      toggleDrawer(false)
  );


  el.finishBtn.addEventListener(
    'click',
    () =>
      showResults(false)
  );


  el.menuBtn.addEventListener(
    'click',
    openMenu
  );


  el.toMenuBtn.addEventListener(
    'click',
    openMenu
  );


  el.continueBtn.addEventListener(
    'click',
    continueGame
  );


  el.restartBtn.addEventListener(
    'click',
    restart
  );


  el.allBtn.addEventListener(
    'click',
    () =>
      setAllTopics(true)
  );


  el.noneBtn.addEventListener(
    'click',
    () =>
      setAllTopics(false)
  );


  el.startBtn.addEventListener(
    'click',
    startGame
  );


  /* =========================================================
     KEYBOARD
     ========================================================= */

  document.addEventListener(
    'keydown',
    event => {

      const key =
        event.key.toLowerCase();


      const menuOpen =
        !el.menu
          .classList
          .contains(
            'hidden'
          )
        &&
        !el.menu
          .classList
          .contains(
            'leaving'
          );


      if (
        menuOpen
      ) {

        if (
          event.key ===
          'Enter'
          &&
          document.activeElement ===
          document.body
        ) {

          startGame();

        }


        return;

      }


      const resultsOpen =
        el.results
          .classList
          .contains(
            'open'
          );


      if (
        event.key ===
        'Escape'
      ) {

        toggleDrawer(false);


        if (
          resultsOpen
          &&
          el.continueBtn
            .style
            .display
          !==
          'none'
        ) {

          continueGame();

        }


        return;

      }


      if (
        resultsOpen
        ||
        !state.playing
      ) {

        return;

      }


      if (
        event.key ===
        'ArrowLeft'
        ||
        key ===
        'a'
        ||
        key ===
        'ф'
      ) {

        choose(
          'red'
        );

      } else if (
        event.key ===
        'ArrowRight'
        ||
        key ===
        'd'
        ||
        key ===
        'в'
      ) {

        choose(
          'blue'
        );

      } else if (
        key ===
        'h'
        ||
        key ===
        'р'
      ) {

        toggleDrawer(

          !el.drawer
            .classList
            .contains(
              'open'
            )

        );

      }

    }
  );


  /* =========================================================
     INITIAL
     ========================================================= */

  renderTopics();

  renderTopicsPill();

  renderHistory(false);

  updateMeta();

})();