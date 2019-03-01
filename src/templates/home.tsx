import { FullPage, FullPageQueryProps } from './fullPage'
import { HeaderSection } from '../components/header'
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

export const HomePage: React.FC<FullPageQueryProps> = props => FullPage({...props,
  section: HeaderSection.Home
})
export default HomePage
