import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Heading,
  Input,
  Select,
  Text,
} from '@execution-os/design-system';

import styles from './App.module.scss';
import { useGetGoalQuery } from './services/apis/goals/goals.api';
import { PlanningProvider } from './app/PlanningProvider';
import { PlanningRuntime } from './app/PlanningRuntime';

function PlanningContent() {
  const { data, isLoading, isError } = useGetGoalQuery('goal-phoenix');

  if (isLoading) {
    return (
      <main className={styles.page}>
        <Text>Loading project...</Text>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className={styles.page}>
        <Alert variant="danger" title="Unable to load project">
          Failed to load project.
        </Alert>
      </main>
    );
  }

  const goal = data.data;

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div>
          <Text size="sm" tone="muted">
            Planning
          </Text>

          <Heading as="h1" size="xl">
            {goal.title}
          </Heading>

          <Text tone="secondary">{goal.description}</Text>
        </div>

        <div className={styles.actions}>
          <Button variant="secondary">Edit project</Button>

          <Button>Add milestone</Button>
        </div>
      </section>

      <Alert variant="info" title="Project is on track">
        8 of 12 working units have been completed this week.
      </Alert>

      <section className={styles.grid}>
        <Card>
          <div className={styles.cardHeader}>
            <div>
              <Heading as="h2" size="md">
                Project progress
              </Heading>

              <Text size="sm" tone="secondary">
                Overall execution progress
              </Text>
            </div>

            <Badge variant="success">On track</Badge>
          </div>

          <div className={styles.progress}>
            <div className={styles.progressBar} style={{ width: '67%' }} />
          </div>

          <Text size="sm" tone="secondary">
            8 / 12 working units completed
          </Text>
        </Card>

        <Card>
          <Heading as="h2" size="md">
            Project settings
          </Heading>

          <div className={styles.form}>
            <Input defaultValue="Project Phoenix" aria-label="Project name" />

            <Select
              defaultValue="in-progress"
              options={[
                {
                  value: 'todo',
                  label: 'To do',
                },
                {
                  value: 'in-progress',
                  label: 'In progress',
                },
                {
                  value: 'completed',
                  label: 'Completed',
                },
              ]}
              aria-label="Project status"
            />

            <label className={styles.checkbox}>
              <Checkbox defaultChecked aria-label="Enable notifications" />

              <Text size="sm">Enable project notifications</Text>
            </label>
          </div>
        </Card>
      </section>

      <Card>
        <div className={styles.cardHeader}>
          <div>
            <Heading as="h2" size="md">
              Milestones
            </Heading>

            <Text size="sm" tone="secondary">
              Track progress across the project.
            </Text>
          </div>

          <Button size="sm">Add milestone</Button>
        </div>

        <div className={styles.milestones}>
          <div className={styles.milestone}>
            <div>
              <Text>Customer research</Text>

              <Text size="sm" tone="muted">
                4 / 4 working units
              </Text>
            </div>

            <Badge variant="success">Completed</Badge>
          </div>

          <div className={styles.milestone}>
            <div>
              <Text>Onboarding redesign</Text>

              <Text size="sm" tone="muted">
                4 / 8 working units
              </Text>
            </div>

            <Badge variant="info">In progress</Badge>
          </div>
        </div>
      </Card>
    </main>
  );
}

export function App() {
  return (
    <PlanningRuntime>
      <PlanningProvider>
        <PlanningContent />
      </PlanningProvider>
    </PlanningRuntime>
  );
}

export default App;
