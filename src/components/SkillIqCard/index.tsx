import Card from '../Card'
import CardHeader from '../CardHeader'
import PreloadedImg from '../PreloadImg'
import Skill from '../Skill'

export default function SkillIqCard() {
  return (
    <Card>
      <CardHeader
        justify="space-between"
        linkHref="/"
        linkText="View all"
        linkIconText="assessments"
      >
        Skill IQ
      </CardHeader>
      <Skill
        buttonLabel="Retake"
        id="react-skill-iq"
        icon={
          <PreloadedImg
            width={50}
            height={50}
            src="https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png"
            alt="React icon"
          />
        }
        label="Building Web Applications With React"
        level="expert"
      />
      <Skill
        buttonLabel="Retake"
        id="typescript-skill-iq"
        icon={
          <PreloadedImg
            width={50}
            height={50}
            src="https://pluralsight2.imgix.net/paths/images/typescript-1169369a3e.png"
            alt="Typescript icon"
          />
        }
        label="Typescript Core Language"
        level="Proficient"
      />
      <Skill
        buttonLabel="Retake"
        id="html5-skill-iq"
        icon={
          <PreloadedImg
            width={50}
            height={50}
            src="https://pluralsight.imgix.net/paths/path-icons/html5-7ac65c8ec0.png"
            alt="HTML5 icon"
          />
        }
        label="HTML5"
        level="Expert"
      />
    </Card>
  )
}
