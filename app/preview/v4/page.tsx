import { PreviewConcept } from '../PreviewConcept'
import { getConcept } from '../concepts'

export default function PreviewV4() {
  return <PreviewConcept concept={getConcept('v4')} />
}
