export const initialState = {
  isLogin: true,
  visible: false,
  radioValue: -1,
  wordsType: ['无', '名词', '动词', '形容词'],
  color: ['black', 'red', 'green', 'blue'],
  typeArr: [0, 1, 2, 3],
  page: 1,
  totalCount: 0,
  path: 'http://localhost:3000',
  selectedKeys: [],
  articles: [
    { 
      id: null,
      title: '',
      content: '',
      separateWords: [],
      separateWordsProperty: [],
      markEntity: []
    }
  ],
  selection: {
    content: '',
    start: 0,
    end: 0
  },
  showArticle: { 
    id: null,
    title: '',
    content: '',
    separateWords: [],
    separateWordsProperty: [],
    markEntity: []
  },
  createArticle: '',
  createArticleTitle: '',
  createArticleSelected: [],
  username: 'admin',
  password: '123456',
  classData: [],
  ClassListAddInputValue: '',
  addClassVisible: false,
  addClassInputValue: '',
  addClassId: '',
  emotion: {
    emotions: [],
    SiderLeftData: [],
    totalCount: 0,
    page: 1,
    selectedKeys: [],
    showIndex: 0,
    headerNavData: {
      title: '情感标注',
      data: [
        { name: '情感分类', path: '/table/emotion/classify', key: '情感分类' },
        { name: '情感实体抽取', path: '/table/emotion/entity', key: '情感实体抽取' }
      ]
    }
  },
  sepWordsPro: {
    articles: [],
    SiderNavData: [],
    totalCount: 1,
    page: 1,
    selectedKeys: [],
    showIndex: 0,
    headerNavData: {
      title: '分词及词性标注',
      data: [
        { name: '分词', path: '/table/sepWordsPro/sepWords', key: '分词' },
        { name: '词性标注', path: '/table/sepWordsPro/markPro', key: '词性标注' }
      ]
    },
    propertys: [],
  },
  markEntity: {
    headerNavData: {
      title: '实体标注',
      data: [
        { name: '实体标注', path: '/table/markEntity', key: '实体标注' }
      ]
    },
  },
  createTask: {
    name: '',
    instruction: '',
    type: '',
    labels: [],
    selectedLabelsId: null,
    docs: [],
    markUsers: [],
    selectedUsers: []
  },
  createLabels: {
    type: '',
    labels: [],
    labelsValue: [],
    name: ''
  },
  createLabel: {
    type: '',
    name: '',
    symbol: ''
  },
  labelAndLabels: {
    label: {
      data: [],
      type: 'separateWordsProperty',
      page: 1
    },
    labels: {
      data: [],
      type: 'separateWordsProperty',
      page: 1
    }
  },
  tasks: {
    data: [],
    type: ''
  },
  taskId: 25
};