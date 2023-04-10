import defaultSettings from '@/settings'

const title = defaultSettings.title || '订阅查询中心'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
