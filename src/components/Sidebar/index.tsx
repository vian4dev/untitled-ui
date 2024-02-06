import { Logo } from '@/components/Sidebar/Logo'
import { BarChart, CheckSquare, Cog, Flag, HomeIcon, LifeBuoy, Search, SquareAsterisk, Users } from 'lucide-react'
import { NavItem } from './NavItem'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={HomeIcon} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareAsterisk} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className='space-y-1'>
          <span className='text-sm/5 font-medium text-violet-700'>
            Used space
          </span>
          <p className='text-sm/5 text-violet-500'>
            Your team has used 80% of your available space. Need more?
          </p>
        </div>

        <div className='h-2 rounded-full bg-violet-100'>
          <div className='h-2 w-4/5 rounded-full bg-violet-600'></div>
        </div>

        <div className='space-x-3'>
          <button
            type="button" className="text-sm font-medium text-violet-700">
            Dismiss
          </button>
          <button
            type="button" className="text-sm font-medium text-violet-500">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  )
}
