import { Loader, Switch, ScrollArea, Group, Card, Stack, Text, Checkbox, Flex } from '@mantine/core'

import { ITask, IResponse } from 'src/utils/types'
import { asDashboardCard } from '../asDashboardCard'
import { useTasks, useUpdateTask } from 'src/hooks/useTasksQuery'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import classes from './Tasks.module.css'

const defaultValueForShowCompletedTasks = true

export const TasksContent: React.FC<{}> = () => {
	const { data: tasks, isLoading, isError } = useTasks()
	const [showCompletedTasks, setShowCompletedTasks] = useLocalStorage(
		'dashboardShowCompletedTasks',
		defaultValueForShowCompletedTasks
	)

	const { mutate: modifyTask } = useUpdateTask()

	const toggleTaskCompleted = (id: string, isCompleted: boolean) =>
		setTaskCompletion(id, isCompleted)

	const setTaskCompletion = (id: string, isCompleted: boolean) => {
		let payload = {
			id: id,
			isCompleted: isCompleted,
			lastUpdated: new Date(),
		}
		modifyTask(payload, {
			onSettled: (response) => onUpdateSettled(response),
		})
	}

	const onUpdateSettled = (response: IResponse) => {
		console.log(response)
	}

	if (isLoading) return <Loader />
	if (isError) return <>Error</>

	const tasksForDisplay = showCompletedTasks
		? tasks
		: tasks.filter((task: ITask) => !task.isCompleted)

	return (
		<>
			<Flex justify="flex-end">
				<Switch
					checked={showCompletedTasks}
					defaultChecked
					label="Show Completed"
					size="xs"
					mt={-28}
					mb="sm"
					mr="md"
					classNames={{ label: classes.label }}
					onChange={(event) => setShowCompletedTasks(event.currentTarget.checked)}
				/>
			</Flex>

			<ScrollArea h="100%" className={classes.scrollArea}>
				{tasksForDisplay &&
					tasksForDisplay.map((task: ITask) => (
						<Card
							py="md"
							px="lg"
							w="100%"
							shadow="none"
							radius={0}
							key={task._id}
							style={{ flexShrink: 0, borderBottom: `1px solid var(--mantine-color-gray-3)` }}>
							<Group align="center" justify="flex-start" gap="md" wrap="nowrap">
								<Checkbox
									radius="lg"
									size="md"
									color="green"
									checked={task.isCompleted}
									onChange={(event) => toggleTaskCompleted(task._id, event.currentTarget.checked)}
								/>
								<Stack justify="flex-start" gap={0} align="flex-start">
									<Text fw={500} size="sm" c="dark.4" lineClamp={2}>
										{task.title}
									</Text>
								</Stack>
							</Group>
						</Card>
					))}
			</ScrollArea>
		</>
	)
}

export const Tasks = asDashboardCard(TasksContent)
