import { forwardRef } from 'react'
import { MantineLoaderComponent, Flex, Box } from '@mantine/core'

export const RingLoader: MantineLoaderComponent = forwardRef(({ style, ...others }, ref) => (
	<Flex justify="center" align="center" h="100%">
		<Box mt="-xl">
			<svg
				{...others}
				ref={ref}
				style={{
					width: 90,
					height: 90,
					stroke: 'var(--loader-color)',
					...style,
				}}
				viewBox="0 0 90 90"
				xmlns="http://www.w3.org/2000/svg"
				stroke="#fff">
				<g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
					<circle cx="45" cy="45" r="6" strokeOpacity="0">
						<animate
							attributeName="r"
							begin="1.5s"
							dur="3s"
							values="6;22"
							calcMode="linear"
							repeatCount="indefinite"
						/>
						<animate
							attributeName="stroke-opacity"
							begin="1.5s"
							dur="3s"
							values="1;0"
							calcMode="linear"
							repeatCount="indefinite"
						/>
						<animate
							attributeName="stroke-width"
							begin="1.5s"
							dur="3s"
							values="2;0"
							calcMode="linear"
							repeatCount="indefinite"
						/>
					</circle>
					<circle cx="45" cy="45" r="6" strokeOpacity="0">
						<animate
							attributeName="r"
							begin="3s"
							dur="3s"
							values="6;22"
							calcMode="linear"
							repeatCount="indefinite"
						/>
						<animate
							attributeName="stroke-opacity"
							begin="3s"
							dur="3s"
							values="1;0"
							calcMode="linear"
							repeatCount="indefinite"
						/>
						<animate
							attributeName="stroke-width"
							begin="3s"
							dur="3s"
							values="2;0"
							calcMode="linear"
							repeatCount="indefinite"
						/>
					</circle>
					<circle cx="45" cy="45" r="8">
						<animate
							attributeName="r"
							begin="0s"
							dur="1.5s"
							values="6;1;2;3;4;5;6"
							calcMode="linear"
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			</svg>
		</Box>
	</Flex>
))
