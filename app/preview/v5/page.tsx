import { PreviewConcept } from '../PreviewConcept'
import { getConcept } from '../concepts'

export default function PreviewV5() {
  return <PreviewConcept concept={getConcept('v5')} />
}
