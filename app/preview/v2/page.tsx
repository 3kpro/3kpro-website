import { PreviewConcept } from '../PreviewConcept'
import { getConcept } from '../concepts'

export default function PreviewV2() {
  return <PreviewConcept concept={getConcept('v2')} />
}
