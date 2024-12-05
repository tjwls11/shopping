import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button className="bg-blue-300 text-white p-2 rounded-md">
        Click me
      </Button>
      <br />
      <Button>Click me - default</Button>
      <br />
      <Button variant={'destructive'} size={'sm'}>
        Click me -destructive
      </Button>
      <br />
      <Button variant={'outline'} size={'lg'}>
        Click me -outline,lg
      </Button>
      <br />
      <Button variant={'default'} size={'icon'}>
        Click me -default, icon
      </Button>
    </div>
  )
}
