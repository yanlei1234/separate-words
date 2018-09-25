export const initialState = {
  isLogin: true,
  visible: false,
  wordsType: ['无', '名词', '动词', '形容词'],
  color: ['black', 'red', 'green', 'blue'],
  typeArr: [0, 1, 2, 3],
  page: 1,
  totalCount: 0,
  path: 'http://localhost:3000',
  selectedKeys: [],
  selection: {
    content: '',
    start: 0,
    end: 0
  },
  username: 'admin',
  password: '123',
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
    articles: [],
    SiderNavData: [],
    totalCount: 1,
    page: 1,
    selectedKeys: [],
    showIndex: 0,
    headerNavData: {
      title: '实体标注',
      data: [
        { name: '实体标注', path: '/table/markEntity', key: '实体标注' }
      ]
    },
    propertys: []
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
  taskId: 32, //设一个默认值，方便调试，实际设为null
  user: {
    id: 1,  //设一个默认值，方便调试，实际设为null
    name: ''
  },
  users: {
    data: []
  }
};