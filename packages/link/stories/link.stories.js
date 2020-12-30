import YzLink from '../src/link.vue'

export default {
  title: 'YzLink',
  component: YzLink
}

export const Link = _ => ({
  components: { YzLink },
  template: `
    <div>
      <yz-link href="http://www.baidu.com" target="_blank">百度</yz-link>
    </div>
  `
})