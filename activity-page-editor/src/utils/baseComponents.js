export function baseButton (store) {
  console.log('store', store)
  let dynamic = store.state.templates.length * 10
  return {
    activityId: 'Button_' + new Date().getTime(),
    editStatus: false,
    name: 'base-button',
    text: '按钮',
    option: {
      btnType: 0, // 0:无事件  1:外部链接   2:提交表单   3: 客户端事件
      refInput: [], // 提交的input表单
      inputFromUrl: '', // type为2时提交的地址
      urlMethod: 'get', // 提交格式
      appMethod: '', // 客户端方法
      link: '', // 跳转地址
    },
    css: {
      top: 10 + dynamic,
      left: 10 + dynamic,
      width: 100,
      height: 50,
      zIndex: store.state.templates.length + 1,
      background: 'rgba(0, 0, 0, 1)',
      color: '#fff',
      fontSize: 14,
      borderColor: 'rgba(0, 0, 0, 1)',
      borderStyle: 'solid',
      borderWidth: 0,
      borderRadius: 0
    }
  }
}

export function baseImg (store) {
  let dynamic = store.state.templates.length * 10
  return {
    activityId: 'Img_' + new Date().getTime(),
    editStatus: false,
    name: 'base-img',
    option: {
      imgUrl: ''
    },
    css: {
      top: 10 + dynamic,
      left: 10 + dynamic,
      width: 100,
      height: 50,
      zIndex: store.state.templates.length + 1,
    }
  }
}

export function baseText (store) {
  let dynamic = store.state.templates.length * 10
  return {
    activityId: 'Text_' + new Date().getTime(),
    editStatus: false,
    name: 'base-text',
    text: '请修改此处的文字',
    css: {
      top: 10 + dynamic,
      left: 10 + dynamic,
      width: 300,
      height: 33,
      zIndex: store.state.templates.length + 1,
      background: 'rgba(255, 255, 255, 0)',
      border: 'none',
      color: 'rgba(0, 0, 0, 1)',
      fontSize: 24,
      fontWeight: 'normal', // bold
      fontStyle: 'normal', // italic
      textDecoration: 'none' //underline
    }
  }
}

export function baseInput (store) {
  let dynamic = store.state.templates.length * 10
  return {
    activityId: 'Input_' + new Date().getTime(),
    editStatus: false,
    name: 'base-input',
    text: '',
    option: {
      inputName: `default${store.state.templates.length}`,
      placeholder: ''
    },
    css: {
      'box-sizing': 'border-box',
      top: 10 + dynamic,
      left: 10 + dynamic,
      width: 150,
      height: 30,
      zIndex: store.state.templates.length + 1,
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(0, 0, 0, 1)',
      borderColor: 'rgba(0, 0, 0, 1)',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 1,
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12
    }
  }
}
