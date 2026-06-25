import { PreviewConcept } from '../PreviewConcept'
import { getConcept } from '../concepts'

export default function PreviewV3() {
  return <PreviewConcept concept={getConcept('v3')} />
}
