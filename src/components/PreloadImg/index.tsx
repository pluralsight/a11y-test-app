import { ImgHTMLAttributes, Suspense } from 'react'
import { getSkeletonProps } from '@pluralsight/headless-styles'
import { usePreloadedImg } from '@pluralsight/react-utils'

interface FallbackProps {
  width?: string | number
  height?: string | number
}

function Fallback(props: FallbackProps) {
  return (
    <div {...getSkeletonProps()}>
      <div style={{ width: props.width, height: props.height }} />
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
  const { imgData, ...imgProps } = props
  const img = imgData.read()
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...imgProps} {...img} />
}

interface PreloadedImgProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function PreloadedImg(props: PreloadedImgProps) {
  const resource = usePreloadedImg({
    alt: props.alt,
    src: props.src,
  })

  if (resource) {
    return (
      <Suspense
        fallback={<Fallback height={props.height} width={props.width} />}
      >
        <Image {...props} imgData={resource.img} />
      </Suspense>
    )
  }

  return null
}
