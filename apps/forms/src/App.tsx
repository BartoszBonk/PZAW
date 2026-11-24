import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod' 


const Player = z.object({

    username: z.string().min(3).max(20),
    race: z.enum(["Human","Elf","Dwarf","Orc"]),
    class: z.enum(["Warrior","Mage","Archer"]),
    level: z.coerce.number().min(1).max(100),
    description: z.string().max(200),
    public: z.boolean()

  })
function App() {

const [card, setCard] = useState<z.infer<typeof Player> | null>(null);
const [copy, setCopy] = useState<z.infer<typeof Player> | null>(null);
const [words,setWords] = useState(0);
const [enabled,setEnabled] = useState(true);
const [levelError, setLevelError] = useState<string | null>(null)






  const { register, handleSubmit, reset, formState: {isSubmitted, isSubmitSuccessful, isSubmitting, errors } } = useForm({
    resolver: zodResolver(Player),
  });

  const field = 'w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm text-zinc-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 dark:border-zinc-700 dark:text-zinc-100'

  return (
    <div className='flex min-h-svh flex-wrap items-center justify-center gap-6 p-4'>
       <form className='flex w-full max-w-sm flex-col gap-3 rounded-xl border border-zinc-200 p-6 text-left shadow-sm dark:border-zinc-800' onSubmit={handleSubmit((data) => { setCard(data); setCopy(data) })}>
        <h2 className='mb-2 text-xl font-semibold'>Create player</h2>

        <input className={field} placeholder='Username' {...register("username")} />

        <div className='flex gap-3'>
          <select className={field} {...register("race")}>
            {Player.shape.race.options.map((r) => <option key={r}>{r}</option>)}
          </select>

          <select className={field} {...register("class")}>
            {Player.shape.class.options.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <input className={field} type="number" placeholder='Level' {...register("level")} />
        {errors.level && <p className='-mt-2 text-sm text-red-500'>{errors.level.message}</p>}
        <label>{words} / 200 </label>
        <textarea className={field} rows={3} placeholder='Description' {...register("description")} onChange={e => setWords(e.target.value.length)}/>

        <label className='flex items-center gap-2 text-sm'>
          <input type="checkbox" className='accent-violet-600' checked={true} {...register("public")}/>
          Public
        </label>

        <button type="submit" className='mt-2 rounded-md bg-violet-600 py-2 text-sm font-medium text-white hover:bg-violet-700'>Save</button>
       
       <button onClick={()=> reset()}>reset</button>
       </form> 
    
    {isSubmitSuccessful &&
       <div className='flex w-full max-w-sm flex-col gap-3 rounded-xl border border-zinc-200 p-6 text-left shadow-sm dark:border-zinc-800'>
        <div className='mb-2 flex items-center justify-between'>
          <h2 className='m-0 text-xl font-semibold'>Player card</h2>
          <span
            className={`rounded-full bg-violet-600/10 px-2.5 py-0.5 text-xs font-medium text-violet-600 dark:text-violet-400 ${!enabled ? 'cursor-pointer select-none hover:bg-violet-600/20' : ''}`}
            onClick={() => { if (!enabled) setCopy(c => c && { ...c, public: !c.public }) }}
          >
            {(enabled ? card : copy)?.public ? 'Public' : 'Private'}
          </span>
        </div>

        <input type='text' disabled = {enabled} className={field} value={copy?.username ?? ''} onChange={e => setCopy(c => c && { ...c, username: e.target.value })}></input>

        <div className='flex gap-3'>
          <select disabled = {enabled} className={field} value={copy?.race} onChange={e => setCopy(c => c && {...c, race: e.target.value as typeof c.race})}>
            {Player.shape.race.options.map((r) => <option key={r}>{r}</option>)}
          </select>

          <select disabled = {enabled} className={field} value={copy?.class} onChange={e => setCopy(c => c && {...c, class: e.target.value as typeof c.class})}>
            {Player.shape.class.options.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <input type='number' disabled={enabled} className={field} value={copy?.level ?? ''} onChange={e => {
            const result = Player.shape.level.safeParse(e.target.value);
            setLevelError(result.success ? null : result.error.issues[0].message);
            setCopy(c => c && { ...c, level: result.success ? result.data : Number(e.target.value) })}}/>

        {levelError && <p className='-mt-2 text-sm text-red-500'>{levelError}</p>}

        <textarea disabled = {enabled} className={`${field} min-h-18 whitespace-pre-wrap`} value={copy?.description ?? ''} onChange={e => setCopy(c => c && { ...c, description: e.target.value })}></textarea>
        {enabled &&
        <div onClick={() => setEnabled(!enabled)}>edit</div>
        }

        {!enabled && !levelError &&
        <div onClick={() => {setCard(copy); setEnabled(!enabled);}}>Save</div>
        }

        
       </div>
}

    </div>
  )
}

export default App
