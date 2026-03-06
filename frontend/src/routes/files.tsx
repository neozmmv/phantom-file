import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/navbar'

export const Route = createFileRoute('/files')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <Navbar />
    <h1>File Management!</h1>
    </>
  )
}
