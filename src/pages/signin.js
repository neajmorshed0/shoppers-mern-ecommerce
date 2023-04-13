import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoginInput from '@/components/Inputs/LoginInput'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'

export default function signin() {
    return (
        <>
            <Header country="BD" />
            <div className='login relative min-h-screen overflow-hidden flex justify-center py-10'>
                <div className="px-12">
                    <div className="header flex items-center justify-between max-w-xs gap-3">
                        <div className="back-svg w-12 h-12 border rounded-full grid place-items-center hover:text-blue-500 hover:border-blue-600 cursor-pointer" >
                            <BiLeftArrowAlt className='text-xl' />
                        </div>
                        <span className='font-semibold text-sm'>We'd be happy to join us! <Link className='text-blue-500 font-medium underline' href="">Go Store</Link> </span>
                    </div>
                    <div className='pt-5'>
                        <h2 className='text-4xl font-bold mb-3'>Sign in</h2>
                        <p className='mb-4 text-gray-600'>Get access to one of the best </p>
                        <Formik>
                            {(form) => (
                                <Form>
                                    <LoginInput icon="email" placeholder='Email' />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer country="BD" />
        </>
    )
}
