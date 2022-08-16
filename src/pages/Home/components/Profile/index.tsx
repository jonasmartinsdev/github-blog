import { ProfileContainer, ProfileContent, ProfileFooter } from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface UserProfile {
  html: string
  avatar: string
  name: string
  bio: string
  login: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<UserProfile>()

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/jonasmartinsdev')
    const {
      avatar_url: avatar,
      html_url: html,
      name,
      bio,
      login,
      followers,
    } = response.data
    setUser({ html, avatar, name, bio, login, followers })
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      <img src={user?.avatar} alt="" />
      <ProfileContent>
        <header>
          <h1>{user?.name}</h1>
          <a href={user?.html} target={'_blank'} rel="noreferrer">
            <span>Github</span>
            <BsBoxArrowUpRight />
          </a>
        </header>

        <p>{user?.bio}</p>

        <ProfileFooter>
          <li>
            <FaGithub />
            <span>{user?.login}</span>
          </li>
          <li>
            <FaBuilding />
            <span>Rocketseat (quem sabe uai)</span>
          </li>
          <li>
            <FaUserFriends />
            <span>{user?.followers} seguidores</span>
          </li>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  )
}
