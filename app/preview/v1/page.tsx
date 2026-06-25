import { PreviewConcept } from '../PreviewConcept'
import { getConcept } from '../concepts'

export default function PreviewV1() {
  return <PreviewConcept concept={getConcept('v1')} />
}
