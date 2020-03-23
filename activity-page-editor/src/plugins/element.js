import Vue from 'vue'
import '../../theme/index.css'
import {
  Container, Header, Aside, Main,
  Row, Col,
  Form, FormItem, Button, Input, RadioGroup, Radio, RadioButton, Checkbox, CheckboxGroup, ColorPicker, Upload, Slider, InputNumber, Select, Option,
  Dialog,
  Tooltip,
  Table, TableColumn,
  Image,
  Card,
  Alert,
  Message,
  Divider,
  Tabs, TabPane,
} from 'element-ui'

Vue.use(Container).use(Header).use(Aside).use(Main)
  .use(Row).use(Col)
  .use(Form).use(FormItem).use(Button).use(Input).use(RadioGroup).use(Radio).use(RadioButton).use(ColorPicker).use(Upload).use(Checkbox).use(CheckboxGroup).use(Slider).use(InputNumber).use(Select).use(Option)
  .use(Dialog)
  .use(Tooltip)
  .use(Table).use(TableColumn)
  .use(Image)
  .use(Card)
  .use(Alert)
  .use(Divider)
  .use(Tabs)
  .use(TabPane)

Vue.prototype.$message = Message;
