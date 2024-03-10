export default function TrendingTopic() {
    return (
        <div className='my-1 flex items-start justify-between'>
            <div>
                <p className='text-xs'>Business and Finance</p>
                <p className='font-bold dark:text-slate-50'>#Bitcoin</p>
                <p className='text-xs'>2.3k posts</p>
            </div>
            <div className='flex items-center justify-center gap-1 mt-2'>
                <div className='h-[2px] w-[2px] dark:bg-slate-300 rounded-full'></div>
                <div className='h-[2px] w-[2px] dark:bg-slate-300 rounded-full'></div>
                <div className='h-[2px] w-[2px] dark:bg-slate-300 rounded-full'></div>
            </div>
        </div>
    )
}
