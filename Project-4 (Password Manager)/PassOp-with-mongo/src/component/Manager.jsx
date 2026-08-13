import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';

const manager = () => {
    const ref = useRef()
    const passwordRaf = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/");
        let passwords = await req.json();
        console.log(passwords);
        setPasswordArray(passwords);
    };

    useEffect(() => {
        getPasswords()
    }, [])

    const copyText = (text) => {
        toast('opied to clipboard!', {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }


    const showPassword = () => {
        passwordRaf.current.type = "text"
        if (ref.current.src.includes("icons/croseye.png")) {
            ref.current.src = "icons/eye.png"
            passwordRaf.current.type = "password"
        }
        else {
            ref.current.src = "icons/croseye.png"
            passwordRaf.current.type = "text"
        }
    }

    const savePassword = async () => {
        const trimmedForm = {
            site: form.site.trim(),
            username: form.username.trim(),
            password: form.password.trim(),
        }

        if (trimmedForm.site.length > 3 && trimmedForm.username.length > 3 && trimmedForm.password.length > 3) {
            const passwordToSave = {
                ...trimmedForm,
                id: form.id || uuidv4(),
            }

            try {
                if (form.id) {
                    const res = await fetch("http://localhost:3000/", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(passwordToSave),
                    });

                    if (!res.ok) {
                        throw new Error('Failed to update password');
                    }

                    setPasswordArray((prev) => [
                        ...prev.filter(item => item.id !== passwordToSave.id),
                        passwordToSave,
                    ]);
                } else {
                    const res = await fetch("http://localhost:3000/", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(passwordToSave),
                    });

                    if (!res.ok) {
                        throw new Error('Failed to save password');
                    }

                    setPasswordArray((prev) => [...prev, passwordToSave]);
                }

                setform({ site: "", username: "", password: "" })
                toast('Password saved!', {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } catch (error) {
                console.error(error);
                toast('Error: Password not save!')
            }
        }
        else {
            toast('Error: Password not save!')
        }
    }

    const deletePassword = async (id) => {
        console.log("Deleting password with ID:", id)
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id));
            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
            let res = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
            toast('Password Deleted', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const editPassword = (id) => {
        console.log("Editing password with ID:", id)
        setform({ ...passwordArray.filter(i => i.id === id)[0], id: id })
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <div className="fixed inset-0 -z-10 w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="p-3 md:p-0 md:px-60 md:py-10 md:mx-auto ">
                <h1 className='text-4xl text font-bold text-center text-purple-600'>
                    <span className="text-red-600">&lt;</span>
                    Pass
                    <span className="text-red-600">OP/&gt;</span>
                </h1>
                <p className='text-purple-600 text-xl p-3 text-center'>Your own Password Manager</p>
                <div className="text-purple-600 flex flex-col p-4 gap-5 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='w-full rounded-full outline-none text-lg border border-purple-400 my-2 p-4 py-2' type="text" name='site' id='site' />
                    <div className="flex flex-col md:flex-row w-full gap-5">
                        <input value={form.username} onChange={handleChange} placeholder='Enter UserName' className="md:w-1/2 rounded-full outline-none text-lg border border-purple-400 my-2 p-4 py-2" name='username' id='username' />
                        <div className="relative md:w-1/2">
                            <input ref={passwordRaf} value={form.password} onChange={handleChange} placeholder="Enter Password" className="w-full rounded-full outline-none text-lg border border-purple-400 my-2 p-4 py-2" type='password' name='password' id='password' />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} width={35} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-purple-50 rounded-full py-2 px-4 w-fit hover:bg-purple-100 text-lg border border-purple-400 hover:cursor-pointer hover:scale-105'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            colors="primary:#9333ea">
                        </lord-icon>
                        Save Password
                    </button>
                </div>
                <h2 className='text-2xl font-bold py-4'>Your Passwords</h2>
                {passwordArray.length === 0 && <div> No passwords to show</div>}
                {passwordArray.length != 0 && <div className='w-full overflow-x-auto'>
                    <table className="table-auto w-full text-xs md:text-base">
                        <thead className='bg-purple-400 text-white'>
                            <tr>
                                <th className='py-2'>WebSite name</th>
                                <th className='py-2'>UserName</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-purple-400'>
                                        <div className='flex justify-center flex-col md:flex-row items-center'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='mx-3 lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    style={{ "width": "30px", "height": "30px", "paddingTop": "5px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-purple-400 text-center'>
                                        <div className='flex justify-center flex-col md:flex-row items-center'>
                                            {item.username}
                                            <div className='mx-3 lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "30px", "height": "30px", "paddingTop": "5px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-purple-400 text-center'>
                                        <div className='flex justify-center flex-col md:flex-row items-center'>
                                            <span>{"*".repeat(item.password.length)}</span>
                                            <div className='mx-3 lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "30px", "height": "30px", "paddingTop": "5px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-purple-400 text-center'>
                                        <div className="flex justify-center flex-col md:flex-row items-center">
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                }
            </div>
        </>
    )
}

export default manager
