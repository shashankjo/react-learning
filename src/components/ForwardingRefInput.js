import React from 'react'

// function ForwardingRefInput() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
// }

const ForwardingRefInput = React.forwardRef((props, ref) => {
	return (
		<div>
      <input type="text" ref={ref} />
		</div>
	)
})

export default ForwardingRefInput