import { useState, useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function NoteCard({ title, body }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { largeText } = useContext(SettingsContext)

  return (
    <div>
      <h3
        className={`pr-8 ${largeText ? 'text-[30px]' : 'text-[22px]'} font-normal break-words`}
      >
        {title}
      </h3>

      {isExpanded && (
        <p
          className={`mt-3 ${largeText ? 'text-[24px]' : 'text-[17px]'} break-words whitespace-pre-wrap text-[#4d4d4d]`}
        >
          {body}
        </p>
      )}

      <button
        type="button"
        onClick={function () {
          setIsExpanded(!isExpanded)
        }}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard