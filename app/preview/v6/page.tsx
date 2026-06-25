import { PreviewConcept } from '../PreviewConcept'
import { getConcept } from '../concepts'

export default function PreviewV6() {
  return <PreviewConcept concept={getConcept('v6')} />
}
