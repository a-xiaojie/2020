import Vue from 'vue'
import '../../theme/index.css'
import { Container, Header, Aside, Main, Row, Col, Form, FormItem, Button, Input, RadioGroup, Radio, ColorPicker, Upload, Dialog, Tooltip, Table, TableColumn, Image, Card, Alert, Message } from 'element-ui'

Vue.use(Container).use(Header).use(Aside).use(Main)
  .use(Row).use(Col)
  .use(Form).use(FormItem).use(Button).use(Input).use(RadioGroup).use(Radio).use(ColorPicker).use(Upload)
  .use(Dialog)
  .use(Tooltip)
  .use(Table).use(TableColumn)
  .use(Image)
  .use(Card)
  .use(Alert)

Vue.prototype.$message = Message;
