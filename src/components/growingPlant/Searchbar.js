import { Command } from "cmdk";

const Searchlist=()=>{
    return(
        <Command>
        <Command.Input></Command.Input>

        <Command.List>
        <Command.Empty>No result found</Command.Empty>
        <Command.Group>
            <Command.Item>BMW</Command.Item>
            <Command.Item>Audi</Command.Item>
            <Command.Item>Ford</Command.Item>
            <Command.Item>Thar</Command.Item>
        </Command.Group>
        </Command.List>
        </Command>
    )
}


export default Searchlist;