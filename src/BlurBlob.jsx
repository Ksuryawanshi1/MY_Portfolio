import React from 'react'
import PropTypes from "prop-types"

const BlurBlob = ({ position, size }) => {
  const { top, right } = position
  const { width, height } = size

  return (
    <div
      className="absolute"
      style={{
        top,
        right,
        width,
        height,
        transform: "translate(50%, -50%)"
      }}
    >
      <div
        className="
          w-full h-full 
          bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob
          max-w-[160px] max-h-[160px] 
          sm:max-w-[200px] sm:max-h-[200px]
          md:max-w-[280px] md:max-h-[280px]
          lg:max-w-[360px] lg:max-h-[360px]
        "
      />
    </div>
  )
}

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    right: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
}

export default BlurBlob
