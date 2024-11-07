export default function RowRiwayat(props: any) {
    return (
        <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-4 my-5 flex justify-center items-center h-20">
            <div className="text-white text-lg text-center">
                {props.sekolah}
            </div>
        </div>
    );
}
