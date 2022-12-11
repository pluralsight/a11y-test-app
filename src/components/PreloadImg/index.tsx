import { ImgHTMLAttributes, Suspense } from 'react'
import { getSkeletonProps } from '@pluralsight/headless-styles'
import { usePreloadedImg } from '@pluralsight/react-utils'
import { SkeletonOptions } from '@pluralsight/headless-styles/types'

interface FallbackProps extends SkeletonOptions {
  width?: string | number
  height?: string | number
}

function Fallback(props: FallbackProps) {
  const width = props.kind === 'circle' ? undefined : 'fit-content'

  return (
    <div
      aria-label="Image loading..."
      {...getSkeletonProps({ kind: props.kind })}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        width,
      }}
    >
      <div
        style={{
          width: props.width,
          height: props.height,
          maxWidth: '100%',
        }}
      />
    </div>
  )
}

interface Resource {
  read: () => Promise<void>
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  imgData: Resource
}

function Image(props: ImageProps) {
  const { imgData, width, height, ...imgProps } = props
  const img = imgData.read()
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...imgProps} {...img} />
}

interface PreloadedImgProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    SkeletonOptions {}

export default function PreloadedImg(props: PreloadedImgProps) {
  const resource = usePreloadedImg({
    alt: props.alt,
    src: props.src,
  })

  if (resource) {
    return (
      <Suspense
        fallback={
          <Fallback
            height={props.height}
            width={props.width}
            kind={props.kind}
          />
        }
      >
        <Image {...props} imgData={resource.img} />
      </Suspense>
    )
  }

  return null
}
