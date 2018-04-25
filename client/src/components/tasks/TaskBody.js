import React from "react";
import { Card, Grid, Label, Image } from "semantic-ui-react";
import testTasks from "./dummyTasks";

const TaskBody = props => {
	const task = testTasks;
	return (
		<Grid celled>
			{task ? (
				task.map(t => (
					<Grid.Row columns={4}>
						<Grid.Column>{t.description}</Grid.Column>
						<Grid.Column>
							<Label as="a" color="blue" image>
								{t.assignedTo}
							</Label>
						</Grid.Column>
						<Grid.Column>{t.status}</Grid.Column>
						<Grid.Column>{t.dueOn}</Grid.Column>
					</Grid.Row>
				))
			) : (
				<Grid.Column>No tasks added yet</Grid.Column>
			)}
		</Grid>
	);
};

export default TaskBody;
