import Link from "next/link";


export default function notFound(){
        return(
            <div>
                <h1>This page is not found</h1>
                <Link href="/"> Go to home page</Link>
            </div>
        );
}